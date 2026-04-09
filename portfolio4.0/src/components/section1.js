import React, { useState, useEffect, useCallback, useRef } from 'react';
import './section.css';
import martian from '../static/image-mars.png';

export default () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
    const starsRef = useRef(null);
    const starsGenerated = useRef(false);

    useEffect(() => {
        if (starsRef.current && !starsGenerated.current) {
            starsGenerated.current = true;
            const container = starsRef.current;
            for (let i = 0; i < 60; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                const size = Math.random() * 2.5 + 1;
                star.style.width = size + 'px';
                star.style.height = size + 'px';
                star.style.animationDelay = Math.random() * 3 + 's';
                star.style.animationDuration = (Math.random() * 2 + 2) + 's';
                container.appendChild(star);
            }
        }
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const x = (e.clientX - rect.left - centerX) / centerX;
        const y = (e.clientY - rect.top - centerY) / centerY;
        setOffset({ x, y });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setOffset({ x: 0, y: 0 });
    }, []);

    return (
        <div
            className='sectionWrap'
            id='noClicky'
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className='parallaxStars' ref={starsRef}
                style={{
                    transform: `translate(${offset.x * 15}px, ${offset.y * 15}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            />
            <div className='sectionLeft' style={{
                transform: `translate(${offset.x * 3}px, ${offset.y * 3}px)`,
                transition: 'transform 0.4s ease-out',
            }}>
                <h1>Peter Hellwege</h1>
                <br/>
                    <div className='lineBreak'
                        style={{
                        background: '#5BC0BE',
                        height: '4px',
                        width: '18%',
                        marginLeft: '25%',
                        borderRadius: '.25em'
                        }}
                    />
                    <br className='lineBreak'/>
                    <div className='lineBreak'
                        style={{
                        background: '#5BC0BE',
                        height: '4px',
                        width: '18%',
                        marginLeft: '42%',
                        borderRadius: '.25em'
                        }}
                    />
                    <br className='lineBreak'/>
                <h3>Full-Stack Software Engineer &
                    <br/>
                    Data Engineer.
                </h3>
            </div>
            <div className='sectionRight parallaxScene'>
                <img
                    src={martian}
                    alt='the planet Mars'
                    className='parallaxMars'
                    style={{
                        transform: `translate(${offset.x * -20}px, ${offset.y * -20}px)`,
                        transition: 'transform 0.5s ease-out',
                    }}
                />
                <h1 className='rightTitle' id='section1RightTitle'
                    style={{
                        transform: `translate(${offset.x * -8}px, ${offset.y * -8}px)`,
                        transition: 'transform 0.4s ease-out',
                    }}
                >Portfolio</h1>
                <h1 className='rightTitle' id='section1RightTitle2'>Portfolio</h1>
            </div>
        </div>
    )
}
