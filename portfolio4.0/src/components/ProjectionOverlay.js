import { useRef, useEffect, useCallback } from 'react';
import { useMotionValue } from 'framer-motion';

const TARGET_SELECTOR = '.preview-card, .about-preview-image, .about-preview-text, .contact-card, .social-row, .about-bio, .section-header';
const MASK_SELECTOR = '.preview-card, .contact-card, .about-preview-image, .about-bio, .trifold-card, .skill-card, .about-preview-text, .cta-btn, .social-row';
const LINES_PER_OBJECT = 400;

function roundedRectPath(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function getRoundedPoint(rect, frac, rad) {
  const r = Math.min(rad, rect.width / 2, rect.height / 2);
  const straightW = rect.width - 2 * r;
  const straightH = rect.height - 2 * r;
  const cornerArc = Math.PI * r / 2;
  const perim = 2 * (straightW + straightH) + 4 * cornerArc;
  let d = ((frac % 1) + 1) % 1 * perim;

  if (d < straightW) {
    return { x: rect.left + r + d, y: rect.top };
  }
  d -= straightW;
  if (d < cornerArc) {
    const a = -Math.PI / 2 + (d / cornerArc) * (Math.PI / 2);
    return { x: rect.right - r + Math.cos(a) * r, y: rect.top + r + Math.sin(a) * r };
  }
  d -= cornerArc;
  if (d < straightH) {
    return { x: rect.right, y: rect.top + r + d };
  }
  d -= straightH;
  if (d < cornerArc) {
    const a = (d / cornerArc) * (Math.PI / 2);
    return { x: rect.right - r + Math.cos(a) * r, y: rect.bottom - r + Math.sin(a) * r };
  }
  d -= cornerArc;
  if (d < straightW) {
    return { x: rect.right - r - d, y: rect.bottom };
  }
  d -= straightW;
  if (d < cornerArc) {
    const a = Math.PI / 2 + (d / cornerArc) * (Math.PI / 2);
    return { x: rect.left + r + Math.cos(a) * r, y: rect.bottom - r + Math.sin(a) * r };
  }
  d -= cornerArc;
  if (d < straightH) {
    return { x: rect.left, y: rect.bottom - r - d };
  }
  d -= straightH;
  const a = Math.PI + (d / cornerArc) * (Math.PI / 2);
  return { x: rect.left + r + Math.cos(a) * r, y: rect.top + r + Math.sin(a) * r };
}

function getEdgePoints(rect, count, t, rad = 12) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const jitter = Math.sin(t * 2.3 + i * 0.97) * 0.003 + Math.sin(t * 5.1 + i * 0.31) * 0.002;
    const frac = (i / count) + jitter;
    points.push(getRoundedPoint(rect, frac, rad));
  }
  return points;
}

function getCirclePoints(cx, cy, radius, count, t) {
  const points = [];
  for (let i = 0; i < count; i++) {
    const jitter = Math.sin(t * 3.1 + i * 0.67) * 0.015 + Math.sin(t * 7.3 + i * 0.19) * 0.01;
    const angle = ((i / count) + jitter) * Math.PI * 2;
    const rJitter = 1 + Math.sin(t * 4.7 + i * 0.53) * 0.03;
    points.push({
      x: cx + Math.cos(angle) * radius * rJitter,
      y: cy + Math.sin(angle) * radius * rJitter,
    });
  }
  return points;
}

export default function ProjectionOverlay({ scrollProgress, sceneRef }) {
  const canvasRef = useRef(null);
  const animFrame = useRef(null);
  const progress = useMotionValue(0);
  const timeRef = useRef(0);
  const targetsRef = useRef([]);

  useEffect(() => {
    return scrollProgress.on('change', (v) => {
      progress.set(v);
    });
  }, [scrollProgress, progress]);

  useEffect(() => {
    const queryTargets = () => {
      targetsRef.current = Array.from(document.querySelectorAll(TARGET_SELECTOR));
    };
    queryTargets();
    const timer = setTimeout(queryTargets, 1000);
    return () => clearTimeout(timer);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const t = timeRef.current;
    timeRef.current += 0.008;

    ctx.clearRect(0, 0, w, h);

    const scrollY = progress.get();
    const sourceX = w - 2;
    const sourceY = h * 0.08 + scrollY * h * 0.84;

    const occlusionRects = [];
    const occluders = document.querySelectorAll('.content-section, .preview-card, .contact-card, .about-preview-image, .about-bio, .trifold-card, .skill-card');
    for (const s of occluders) {
      const r = s.getBoundingClientRect();
      if (r.bottom > 0 && r.top < h) occlusionRects.push(r);
    }

    let lineIndex = 0;

    const drawLines = (points, visibility) => {
      for (const pt of points) {
        const dx = pt.x - sourceX;
        const dy = pt.y - sourceY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const flicker = 0.6 + Math.sin(t * 3.5 + lineIndex * 0.37) * 0.2 + Math.sin(t * 8.1 + lineIndex * 0.13) * 0.12;
        const distFade = Math.max(0, 1 - dist / (w * 1.3));
        const scanPulse = (Math.sin(t * 3 - dist * 0.005 + lineIndex * 0.04) + 1) * 0.5;
        const alpha = flicker * distFade * visibility * 0.12 * (0.5 + scanPulse * 0.5);

        ctx.beginPath();
        ctx.moveTo(sourceX, sourceY);
        ctx.lineTo(pt.x, pt.y);

        const grad = ctx.createLinearGradient(sourceX, sourceY, pt.x, pt.y);
        grad.addColorStop(0, `rgba(91, 192, 190, ${alpha * 0.8})`);
        grad.addColorStop(0.6, `rgba(91, 192, 190, ${alpha * 0.2})`);
        grad.addColorStop(1, `rgba(91, 192, 190, ${alpha * 1.8})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.3 + Math.sin(t * 4.5 + lineIndex * 0.47) * 0.15;
        ctx.stroke();

        lineIndex++;
      }
    };

    // DOM elements
    const targetRects = [];
    for (const el of targetsRef.current) {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > h) continue;

      const visibility = Math.min(1, Math.max(0, (h - rect.top) / (h * 0.25)));
      if (visibility <= 0) continue;

      targetRects.push({ rect, visibility });
      const points = getEdgePoints(rect, LINES_PER_OBJECT, t);
      drawLines(points, visibility);
    }

    // Planets
    const planetTargets = [];
    const planets = sceneRef.current?.getPlanetPositions?.();
    if (planets) {
      const getPlanetOcclusion = (px, py) => {
        let minVis = 1;
        for (const sr of occlusionRects) {
          if (px >= sr.left && px <= sr.right && py >= sr.top && py <= sr.bottom) {
            const depth = Math.min(py - sr.top, sr.bottom - py, px - sr.left, sr.right - px);
            const fade = Math.min(1, depth / 60);
            const vis = 0.1 + (1 - fade) * 0.9;
            minVis = Math.min(minVis, vis);
          }
        }
        return minVis;
      };

      if (planets.mars && planets.mars.radius > 5) {
        const m = planets.mars;
        const onScreen = m.x > -m.radius && m.x < w + m.radius && m.y > -m.radius && m.y < h + m.radius;
        if (onScreen) {
          const occlusion = getPlanetOcclusion(m.x, m.y);
          planetTargets.push({ cx: m.x, cy: m.y, radius: m.radius, vis: occlusion });
          const points = getCirclePoints(m.x, m.y, m.radius, LINES_PER_OBJECT, t);
          drawLines(points, occlusion);
        }
      }
      if (planets.titan && planets.titan.radius > 3) {
        const tt = planets.titan;
        const onScreen = tt.x > -tt.radius && tt.x < w + tt.radius && tt.y > -tt.radius && tt.y < h + tt.radius;
        if (onScreen) {
          const occlusion = getPlanetOcclusion(tt.x, tt.y);
          planetTargets.push({ cx: tt.x, cy: tt.y, radius: tt.radius, vis: occlusion });
          const points = getCirclePoints(tt.x, tt.y, tt.radius, LINES_PER_OBJECT, t);
          drawLines(points, occlusion);
        }
      }
    }

    // Mask out card interiors so lines appear behind them
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0,0,0,1)';
    const maskEls = document.querySelectorAll(MASK_SELECTOR);
    for (const el of maskEls) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > h) continue;
      roundedRectPath(ctx, r.left, r.top, r.width, r.height, 12);
      ctx.fill();
    }
    ctx.restore();

    // Border glow where projection lines hit card edges
    ctx.save();

    for (const { rect, visibility } of targetRects) {
      const cx = (rect.left + rect.right) / 2;
      const cy = (rect.top + rect.bottom) / 2;
      const angleToSource = Math.atan2(sourceY - cy, sourceX - cx);

      const pulse1 = 0.5 + Math.sin(t * 4) * 0.3 + Math.sin(t * 9) * 0.2;
      const pulse2 = 0.4 + Math.sin(t * 5.7 + 1.3) * 0.25 + Math.sin(t * 11.3) * 0.15;
      const pulse3 = 0.6 + Math.sin(t * 3.2 + 2.7) * 0.2 + Math.sin(t * 7.8) * 0.15;
      const baseAlpha = visibility * 0.7;

      const gradLen = Math.max(rect.width, rect.height);
      const drift = Math.sin(t * 1.5) * 0.15;
      const gx1 = cx + Math.cos(angleToSource + drift) * gradLen;
      const gy1 = cy + Math.sin(angleToSource + drift) * gradLen;
      const gx2 = cx - Math.cos(angleToSource + drift) * gradLen;
      const gy2 = cy - Math.sin(angleToSource + drift) * gradLen;

      const grad = ctx.createLinearGradient(gx1, gy1, gx2, gy2);
      grad.addColorStop(0, `rgba(91, 192, 190, ${pulse1 * baseAlpha * 0.7})`);
      grad.addColorStop(0.2, `rgba(91, 192, 190, ${pulse2 * baseAlpha * 0.4})`);
      grad.addColorStop(0.45, `rgba(91, 192, 190, ${pulse3 * baseAlpha * 0.15})`);
      grad.addColorStop(0.7, `rgba(91, 192, 190, ${pulse2 * baseAlpha * 0.08})`);
      grad.addColorStop(1, 'rgba(91, 192, 190, 0)');

      ctx.shadowColor = `rgba(91, 192, 190, ${pulse1 * baseAlpha})`;
      ctx.shadowBlur = 10 + Math.sin(t * 3) * 4 + Math.sin(t * 7.5) * 2;
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.2 + Math.sin(t * 6) * 0.3;

      roundedRectPath(ctx, rect.left, rect.top, rect.width, rect.height, 12);
      ctx.stroke();
    }

    ctx.shadowBlur = 0;
    ctx.restore();

    // Source glow
    const glowSize = 8 + Math.sin(t * 4) * 3;
    const glowGrad = ctx.createRadialGradient(sourceX, sourceY, 0, sourceX, sourceY, glowSize);
    glowGrad.addColorStop(0, 'rgba(91, 192, 190, 0.4)');
    glowGrad.addColorStop(0.4, 'rgba(91, 192, 190, 0.15)');
    glowGrad.addColorStop(1, 'rgba(91, 192, 190, 0)');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(sourceX - glowSize, sourceY - glowSize, glowSize * 2, glowSize * 2);

    animFrame.current = requestAnimationFrame(draw);
  }, [progress, sceneRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    animFrame.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 3,
        pointerEvents: 'none',
      }}
    />
  );
}
