import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth cursor animation
    const animateCursor = () => {
      // Main cursor follows mouse immediately
      cursorX += (mouseX - cursorX) * 0.9;
      cursorY += (mouseY - cursorY) * 0.9;
      
      // Follower lags behind
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY
      });

      gsap.set(follower, {
        x: followerX,
        y: followerY
      });

      requestAnimationFrame(animateCursor);
    };

    // Hover effects
    const addHoverEffect = (element) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          duration: 0.3,
          scale: 0.5,
          backgroundColor: '#DC143C'
        });
        gsap.to(follower, {
          duration: 0.3,
          scale: 2,
          opacity: 0.3
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          duration: 0.3,
          scale: 1,
          backgroundColor: '#8B0000'
        });
        gsap.to(follower, {
          duration: 0.3,
          scale: 1,
          opacity: 0.1
        });
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects to interactive elements
    document.querySelectorAll('a, button, .interactive').forEach(addHoverEffect);

    // Start animation
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-dark-red rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ top: '-6px', left: '-6px' }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-dark-red rounded-full pointer-events-none z-40 opacity-10"
        style={{ top: '-16px', left: '-16px' }}
      />
    </>
  );
};

export default CustomCursor;
