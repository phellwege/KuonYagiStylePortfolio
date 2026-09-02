import React, { useEffect, useState } from 'react';
import './imageCycler.css';

export default function ImageCycler({ images, alt, interval = 5000, startDelay = 0 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;
    let timer;
    const kickoff = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
      timer = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    }, interval + startDelay);
    return () => {
      clearTimeout(kickoff);
      clearInterval(timer);
    };
  }, [images.length, interval, startDelay]);

  if (images.length < 2) {
    return <img src={images[0]} alt={alt} loading="lazy" />;
  }

  return (
    <div className="image-cycler">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={i === 0 ? alt : ''}
          loading="lazy"
          className="image-cycler-frame"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
