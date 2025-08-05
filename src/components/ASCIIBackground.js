import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ASCIIBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const chars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□', '▪', '▫', '●', '○', '◆', '◇'];
    
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // ASCII Grid class
    class ASCIIGrid {
      constructor() {
        this.cols = Math.floor(canvas.width / 20);
        this.rows = Math.floor(canvas.height / 20);
        this.grid = [];
        this.init();
      }

      init() {
        for (let i = 0; i < this.rows; i++) {
          this.grid[i] = [];
          for (let j = 0; j < this.cols; j++) {
            this.grid[i][j] = {
              char: chars[Math.floor(Math.random() * chars.length)],
              opacity: Math.random() * 0.1,
              baseOpacity: Math.random() * 0.05,
              scale: 0.8 + Math.random() * 0.4,
              rotateSpeed: (Math.random() - 0.5) * 0.02
            };
          }
        }
      }

      update() {
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            const cell = this.grid[i][j];
            const x = j * 20;
            const y = i * 20;
            
            // Distance from mouse
            const dx = mouseX - x;
            const dy = mouseY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 200;
            
            if (distance < maxDistance) {
              const influence = 1 - (distance / maxDistance);
              cell.opacity = cell.baseOpacity + influence * 0.3;
              cell.scale = 0.8 + influence * 0.6;
            } else {
              cell.opacity = gsap.utils.interpolate(cell.opacity, cell.baseOpacity, 0.02);
              cell.scale = gsap.utils.interpolate(cell.scale, 0.8 + Math.random() * 0.4, 0.02);
            }

            // Random character changes
            if (Math.random() < 0.001) {
              cell.char = chars[Math.floor(Math.random() * chars.length)];
            }
          }
        }
      }

      draw() {
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            const cell = this.grid[i][j];
            const x = j * 20 + 10;
            const y = i * 20 + 10;

            ctx.save();
            ctx.translate(x, y);
            ctx.scale(cell.scale, cell.scale);
            ctx.globalAlpha = cell.opacity;
            ctx.fillStyle = '#8B0000';
            ctx.fillText(cell.char, 0, 0);
            ctx.restore();
          }
        }
      }
    }

    // Initialize
    resizeCanvas();
    const grid = new ASCIIGrid();

    // Animation loop
    const animate = () => {
      grid.update();
      grid.draw();
      animationId = requestAnimationFrame(animate);
    };

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      grid.init();
    });
    
    window.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.05 }}
    />
  );
};

export default ASCIIBackground;
