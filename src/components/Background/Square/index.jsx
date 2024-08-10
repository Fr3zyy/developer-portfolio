"use client"
import React, { useEffect, useRef } from 'react';

export default function Square({ column, row, transparentEffectDirection, blockColor, zIndex }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 3 - 1.5
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="absolute w-full h-full inset-0 z-0 overflow-hidden" style={{
                backgroundSize: `${column}rem ${row}rem`,
                backgroundImage: `linear-gradient(to right, ${blockColor} 1px, transparent 1px), linear-gradient(to bottom, ${blockColor} 1px, transparent 1px)`,
                zIndex: zIndex || "-10",
            }} />
            <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: zIndex ? zIndex + 1 : "-9" }} />
            {transparentEffectDirection === "bottomToTop" && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131a] via-[#12131a]/50" style={{
                    zIndex: zIndex ? zIndex + 2 : "-8",
                }} />
            )}
            {transparentEffectDirection === "leftRightBottomTop" && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12131a] via-[#12131a]/50" style={{
                        zIndex: zIndex ? zIndex + 2 : "-8",
                    }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#12131a] via-[#12131a]/50" style={{
                        zIndex: zIndex ? zIndex + 2 : "-8",
                    }} />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#12131a] via-[#12131a]/50" style={{
                        zIndex: zIndex ? zIndex + 2 : "-8",
                    }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#12131a] via-[#12131a]/50" style={{
                        zIndex: zIndex ? zIndex + 2 : "-8",
                    }} />
                </>
            )}
        </>
    );
}