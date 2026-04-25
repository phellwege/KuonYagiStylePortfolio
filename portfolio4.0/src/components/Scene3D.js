import React, { useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import marsMap from '../static/AUsVQ-equirectangular.jpg';
import titanMap from '../static/titan_texture_map_8k_by_fargetanik_db0f8m0-fullview.jpg';

function createScanLineTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 4, 512);

  for (let y = 0; y < 512; y += 4) {
    ctx.fillStyle = 'rgba(91, 192, 190, 0.08)';
    ctx.fillRect(0, y, 4, 2);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 3);
  return tex;
}

function HoloPlanet({ groupRef, texture, radius, segments }) {
  const mesh = useRef();
  const holoMat = useRef();
  const scanTex = useMemo(() => createScanLineTexture(), []);

  useFrame((state) => {
    mesh.current.rotation.y += 0.0006;
    const t = state.clock.elapsedTime;
    const flicker = 0.7 + Math.sin(t * 8) * 0.03 + Math.sin(t * 13.7) * 0.02;
    holoMat.current.opacity = flicker;
  });

  return (
    <group ref={groupRef} position={[2.2, -0.3, 0]}>
      <mesh ref={mesh}>
        <sphereGeometry args={[radius, segments, segments]} />
        <meshBasicMaterial
          ref={holoMat}
          map={texture}
          color="#4dc8c5"
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </mesh>
      <mesh scale={1.002}>
        <sphereGeometry args={[radius, segments, segments]} />
        <meshBasicMaterial
          map={scanTex}
          transparent
          depthWrite={false}
          side={THREE.FrontSide}
        />
      </mesh>
    </group>
  );
}

function HoloTitan({ marsGroupRef, groupRef, texture }) {
  const mesh = useRef();
  const holoMat = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const orbitT = t * 0.25;
    const marsScale = marsGroupRef.current ? marsGroupRef.current.scale.x : 1;
    const orbitRadius = 2.8 * marsScale;

    const baseX = marsGroupRef.current ? marsGroupRef.current.position.x : 2.2;
    const baseY = marsGroupRef.current ? marsGroupRef.current.position.y : -0.3;
    const baseZ = marsGroupRef.current ? marsGroupRef.current.position.z : 0;

    groupRef.current.position.x = baseX + Math.cos(orbitT) * orbitRadius;
    groupRef.current.position.z = baseZ + Math.sin(orbitT) * orbitRadius;
    groupRef.current.position.y = baseY + Math.sin(orbitT * 1.3) * 0.5;

    mesh.current.rotation.y += 0.002;

    const flicker = 0.5 + Math.sin(t * 9.3) * 0.04 + Math.sin(t * 15.1) * 0.02;
    holoMat.current.opacity = flicker;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={mesh} scale={0.3}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          ref={holoMat}
          map={texture}
          color="#4dc8c5"
          transparent
          opacity={0.5}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function OrbitalParticles({ count = 50 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.2 + Math.random() * 1.4;
      const y = (Math.random() - 0.5) * 0.5;
      pos[i * 3] = Math.cos(angle) * radius + 2.2;
      pos[i * 3 + 1] = y - 0.3;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, [count]);

  useFrame(() => {
    points.current.rotation.y += 0.0006;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#5BC0BE"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent({ zoomRef, planetPositionsRef }) {
  const marsGroupRef = useRef();
  const titanGroupRef = useRef();
  const mouseGroup = useRef();
  const marsTexture = useLoader(THREE.TextureLoader, marsMap);
  const titanTexture = useLoader(THREE.TextureLoader, titanMap);

  useFrame((state) => {
    mouseGroup.current.rotation.y += (state.mouse.x * 0.05 - mouseGroup.current.rotation.y) * 0.03;
    mouseGroup.current.rotation.x += (-state.mouse.y * 0.03 - mouseGroup.current.rotation.x) * 0.03;

    if (zoomRef.current != null && marsGroupRef.current) {
      const z = zoomRef.current;
      const s = 1 + z * 1.4;
      marsGroupRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.04);
      marsGroupRef.current.position.z += (z * 2 - marsGroupRef.current.position.z) * 0.04;
    }

    const camera = state.camera;
    const el = state.gl.domElement;
    const vpW = el.clientWidth;
    const vpH = el.clientHeight;

    if (marsGroupRef.current && titanGroupRef.current) {
      const marsWorld = new THREE.Vector3();
      marsGroupRef.current.getWorldPosition(marsWorld);
      const marsScale = marsGroupRef.current.scale.x;

      const marsNDC = marsWorld.clone().project(camera);
      const marsScreenX = (marsNDC.x * 0.5 + 0.5) * vpW;
      const marsScreenY = (-marsNDC.y * 0.5 + 0.5) * vpH;

      const marsEdge = marsWorld.clone();
      marsEdge.x += 1.6 * marsScale;
      const marsEdgeNDC = marsEdge.project(camera);
      const marsEdgeScreenX = (marsEdgeNDC.x * 0.5 + 0.5) * vpW;
      const marsScreenRadius = Math.abs(marsEdgeScreenX - marsScreenX);

      const titanWorld = new THREE.Vector3();
      titanGroupRef.current.getWorldPosition(titanWorld);

      const titanNDC = titanWorld.clone().project(camera);
      const titanScreenX = (titanNDC.x * 0.5 + 0.5) * vpW;
      const titanScreenY = (-titanNDC.y * 0.5 + 0.5) * vpH;

      const titanEdge = titanWorld.clone();
      titanEdge.x += 0.3;
      const titanEdgeNDC = titanEdge.project(camera);
      const titanEdgeScreenX = (titanEdgeNDC.x * 0.5 + 0.5) * vpW;
      const titanScreenRadius = Math.abs(titanEdgeScreenX - titanScreenX);

      planetPositionsRef.current = {
        mars: { x: marsScreenX, y: marsScreenY, radius: marsScreenRadius },
        titan: { x: titanScreenX, y: titanScreenY, radius: titanScreenRadius },
      };
    }
  });

  return (
    <group ref={mouseGroup}>
      <HoloPlanet groupRef={marsGroupRef} texture={marsTexture} radius={1.6} segments={64} />
      <HoloTitan marsGroupRef={marsGroupRef} groupRef={titanGroupRef} texture={titanTexture} />
      <OrbitalParticles />
    </group>
  );
}

const Scene3D = forwardRef(function Scene3D(props, ref) {
  const zoomRef = useRef(0);
  const planetPositionsRef = useRef(null);

  useImperativeHandle(ref, () => ({
    setZoom: (value) => {
      zoomRef.current = value;
    },
    getPlanetPositions: () => planetPositionsRef.current,
  }));

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      style={{ position: 'absolute', top: 0, left: 0 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <Stars radius={100} depth={80} count={1500} factor={4} fade speed={0.5} />
      <SceneContent zoomRef={zoomRef} planetPositionsRef={planetPositionsRef} />
      <fog attach="fog" args={['#0B132B', 8, 25]} />
    </Canvas>
  );
});

export default Scene3D;
