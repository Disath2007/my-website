// Add dynamic particles
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.body;
            
            // Create particles
            for (let i = 0; i < 100; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.pointerEvents = 'none';
                particle.style.borderRadius = '50%';
                
                // Random properties
                const size = Math.random() * 3 + 1;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const opacity = Math.random() * 0.4 + 0.2;
                const color = `rgba(255, 255, 255, ${opacity})`; // white particles
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.backgroundColor = color;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.boxShadow = `0 0 ${size * 6}px ${color}`;
                
                container.appendChild(particle);
                
                // Animate particle
                animateParticle(particle);
            }
            
            function animateParticle(particle) {
                const startX = parseFloat(particle.style.left);
                const startY = parseFloat(particle.style.top);
                
                const endX = startX + (Math.random() - 0.5) * 20;
                const endY = startY + (Math.random() - 0.5) * 20;
                
                const duration = Math.random() * 15000 + 5000;
                
                particle.animate(
                    [
                        { transform: `translate(0, 0)` },
                        { transform: `translate(${endX - startX}vw, ${endY - startY}vh)` }
                    ], 
                    {
                        duration: duration,
                        iterations: Infinity,
                        direction: 'alternate',
                        easing: 'ease-in-out'
                    }
                );
            }
        });