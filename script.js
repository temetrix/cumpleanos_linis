/* ============================================ */
/* SCRIPT PRINCIPAL - Página de Cumpleaños      */
/* ============================================ */

(function() {
    'use strict';

    /* ============================================ */
    /* VARIABLES GLOBALES                             */
    /* ============================================ */
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const openSurpriseBtn = document.getElementById('open-surprise-btn');
    const floatingNav = document.querySelector('.floating-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    /* ============================================ */
    /* PANTALLA DE BIENVENIDA - TRANSICIÓN          */
    /* ============================================ */
    function initWelcomeScreen() {
        // Crear corazones flotantes en la pantalla de bienvenida
        createFloatingHearts('.floating-hearts-welcome', 15);

        openSurpriseBtn.addEventListener('click', function() {
            // Efecto de ripple en el botón
            createRipple(this, event);

            // Transición cinematográfica
            welcomeScreen.style.opacity = '0';
            welcomeScreen.style.transform = 'scale(1.1)';

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                mainContent.classList.remove('hidden');

                // Forzar reflow para activar la transición
                void mainContent.offsetWidth;

                mainContent.classList.add('visible');

                // Iniciar todas las animaciones
                initHeroAnimations();
                initConfetti();
                initFloatingBalloons();
                initParticles();
                initScrollReveal();
                initCounters();
                initGallery();
                initCarta();
                initMusicPlayer();
                initFloatingHeartsFinal();
                initNavScroll();

                // Mostrar navegación flotante después de un delay
                setTimeout(() => {
                    floatingNav.classList.add('visible');
                }, 1500);

            }, 1500);
        });
    }

    /* ============================================ */
    /* CORAZONES FLOTANTES                            */
    /* ============================================ */
    function createFloatingHearts(containerSelector, count) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const hearts = ['❤️', '💖', '💕', '💗', '💝', '💘', '💓', '💞'];

        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-float';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (6 + Math.random() * 6) + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
            container.appendChild(heart);
        }
    }

    /* ============================================ */
    /* EFECTO RIPPLE EN BOTONES                     */
    /* ============================================ */
    function createRipple(button, event) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    /* ============================================ */
    /* ANIMACIONES DEL HERO                           */
    /* ============================================ */
    function initHeroAnimations() {
        const animateElements = document.querySelectorAll('.animate-in');
        animateElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animated');
            }, index * 200);
        });
    }

    /* ============================================ */
    /* CONFETTI                                       */
    /* ============================================ */
    function initConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;

        const colors = [
            '#ff9eb5', '#c084fc', '#ffd700', '#ffec8b', 
            '#ffc4d6', '#e0b3ff', '#ff6b9d', '#a855f7'
        ];

        const shapes = ['square', 'circle', 'triangle'];

        function createConfettiPiece() {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';

            const color = colors[Math.floor(Math.random() * colors.length)];
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const left = Math.random() * 100;
            const duration = 3 + Math.random() * 4;
            const delay = Math.random() * 2;
            const size = 6 + Math.random() * 8;

            piece.style.left = left + '%';
            piece.style.animationDuration = duration + 's';
            piece.style.animationDelay = delay + 's';
            piece.style.width = size + 'px';
            piece.style.height = size + 'px';
            piece.style.backgroundColor = color;

            if (shape === 'circle') {
                piece.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                piece.style.width = '0';
                piece.style.height = '0';
                piece.style.backgroundColor = 'transparent';
                piece.style.borderLeft = (size/2) + 'px solid transparent';
                piece.style.borderRight = (size/2) + 'px solid transparent';
                piece.style.borderBottom = size + 'px solid ' + color;
            }

            container.appendChild(piece);

            // Remover después de la animación
            setTimeout(() => {
                if (piece.parentNode) piece.remove();
            }, (duration + delay) * 1000);
        }

        // Crear confetti inicial
        for (let i = 0; i < 80; i++) {
            createConfettiPiece();
        }

        // Continuar creando confetti periódicamente
        setInterval(() => {
            for (let i = 0; i < 5; i++) {
                createConfettiPiece();
            }
        }, 2000);
    }

    /* ============================================ */
    /* GLOBOS FLOTANTES                               */
    /* ============================================ */
    function initFloatingBalloons() {
        const container = document.getElementById('floating-balloons');
        if (!container) return;

        const balloons = ['🎈', '🎉', '🎊', '✨', '🌟'];

        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.animationDuration = (8 + Math.random() * 8) + 's';
            balloon.style.animationDelay = Math.random() * 5 + 's';
            balloon.style.fontSize = (2 + Math.random() * 2) + 'rem';
            container.appendChild(balloon);

            setTimeout(() => {
                if (balloon.parentNode) balloon.remove();
            }, 20000);
        }

        // Crear globos iniciales
        for (let i = 0; i < 12; i++) {
            createBalloon();
        }

        // Continuar creando globos
        setInterval(createBalloon, 3000);
    }

    /* ============================================ */
    /* SISTEMA DE PARTÍCULAS (CANVAS)                 */
    /* ============================================ */
    function initParticles() {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId = null;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = this.getRandomColor();
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.02 + Math.random() * 0.03;
            }

            getRandomColor() {
                const colors = [
                    '255, 158, 181',  // rosa
                    '192, 132, 252',  // morado
                    '255, 215, 0',    // dorado
                    '255, 236, 139',  // dorado claro
                    '255, 196, 214',  // rosa claro
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.pulse += this.pulseSpeed;

                // Wrap around
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.2;
                const currentSize = this.size + Math.sin(this.pulse) * 0.5;

                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${Math.max(0, pulseOpacity)})`;
                ctx.fill();

                // Brillo suave
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${Math.max(0, pulseOpacity * 0.3)})`;
                ctx.fill();
            }
        }

        // Crear partículas
        const particleCount = window.innerWidth < 768 ? 30 : 60;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Conectar partículas cercanas con líneas
        function drawConnections() {
            const maxDistance = 150;
            const maxConnections = 3;

            for (let i = 0; i < particles.length; i++) {
                let connections = 0;
                for (let j = i + 1; j < particles.length; j++) {
                    if (connections >= maxConnections) break;

                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255, 158, 181, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        connections++;
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            drawConnections();

            animationId = requestAnimationFrame(animate);
        }

        animate();

        // Pausar animación cuando la pestaña no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    }

    /* ============================================ */
    /* SCROLL REVEAL - Animaciones al hacer scroll   */
    /* ============================================ */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.scroll-reveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Opcional: dejar de observar después de revelar
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    /* ============================================ */
    /* CONTADORES ANIMADOS                            */
    /* ============================================ */
    function initCounters() {
        // Contadores del hero
        const statNumbers = document.querySelectorAll('.stat-number');

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateCounter(entry.target, target, 2000);
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => heroObserver.observe(el));

        // Contadores de la sección final
        const finalCounters = [
            { id: 'counter-years', target: 25 },
            { id: 'counter-months', target: 300 },
            { id: 'counter-days', target: 9125 },
            { id: 'counter-hours', target: 219000 }
        ];

        const finalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    finalCounters.forEach(counter => {
                        const el = document.getElementById(counter.id);
                        if (el) animateCounter(el, counter.target, 2500);
                    });
                    finalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const finalSection = document.querySelector('.final-section');
        if (finalSection) finalObserver.observe(finalSection);
    }

    function animateCounter(element, target, duration) {
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }

    /* ============================================ */
    /* GALERÍA CARRUSEL                               */
    /* ============================================ */
    function initGallery() {
        const track = document.getElementById('galeria-track');
        const dotsContainer = document.getElementById('galeria-dots');
        const prevBtn = document.getElementById('galeria-prev');
        const nextBtn = document.getElementById('galeria-next');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');

        if (!track) return;

        // Datos de ejemplo para la galería (usando placeholders coloridos)
const galleryData = [
    { 
        title: 'Momentos de Alegría', 
        desc: 'Cada sonrisa tuya ilumina el día',
        image: 'imagenes/foto1.jpeg'
    },
    { 
        title: 'Recuerdos Especiales', 
        desc: 'Los mejores momentos a tu lado',
        image: 'imagenes/foto2.jpeg'
    },
    { 
        title: 'Tu Belleza Interior', 
        desc: 'Un corazón lleno de amor',
        image: 'imagenes/foto3.jpeg'
    },
    { 
        title: 'Aventuras Juntos', 
        desc: 'Cada día es una nueva aventura',
        image: 'imagenes/foto4.jpeg'
    },
    { 
        title: 'Risas Compartidas', 
        desc: 'La risa que contagia felicidad',
        image: 'imagenes/foto5.jpeg'
    },
    { 
        title: 'Sueños por Cumplir', 
        desc: 'Juntos hacia nuevos horizontes',
        image: 'imagenes/foto6.jpeg'
    }
];

        // Generar items de la galería
        galleryData.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'galeria-item';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="width:100%; height:350px; background: linear-gradient(135deg, #ff9eb520 0%, #c084fc40 100%); 
                            display:none; align-items:center; justify-content:center; border-radius:20px;">
                    <div style="text-align:center;">
                        <div style="font-size:3rem;">📸</div>
                        <div style="color:#666; font-size:0.9rem;">${item.title}</div>
                    </div>
                </div>
                <div class="galeria-item-overlay">
                    <div class="galeria-item-title">${item.title}</div>
                    <div class="galeria-item-desc">${item.desc}</div>
                </div>
            `;

            // Click para lightbox
            galleryItem.addEventListener('click', () => {
                lightboxImg.src = item.image;
                lightboxCaption.textContent = item.title + ' - ' + item.desc;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            track.appendChild(galleryItem);

            // Crear dot
            const dot = document.createElement('div');
            dot.className = 'galeria-dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', () => scrollToItem(index));
            dotsContainer.appendChild(dot);
        });

        let currentIndex = 0;
        const items = track.querySelectorAll('.galeria-item');
        const dots = dotsContainer.querySelectorAll('.galeria-dot');

        function scrollToItem(index) {
            if (index < 0) index = items.length - 1;
            if (index >= items.length) index = 0;
            
            currentIndex = index;
            
            // Calcular posición exacta sin mover la página
            const itemWidth = items[0].offsetWidth + 24;
            const scrollPosition = index * itemWidth;
            
            // Solo mueve el carrusel, NO la página
            track.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        prevBtn.addEventListener('click', () => scrollToItem(currentIndex - 1));
        nextBtn.addEventListener('click', () => scrollToItem(currentIndex + 1));

        // Auto-scroll
        let autoScrollInterval = setInterval(() => {
            scrollToItem(currentIndex + 1);
        }, 4000);

        // Pausar auto-scroll en hover
        track.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
        track.addEventListener('mouseleave', () => {
            autoScrollInterval = setInterval(() => scrollToItem(currentIndex + 1), 4000);
        });

        // Cerrar lightbox
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Tecla ESC para cerrar lightbox
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });

        // Actualizar dots al scroll manual
        track.addEventListener('scroll', () => {
            const scrollLeft = track.scrollLeft;
            const itemWidth = items[0].offsetWidth + 24; // incluyendo gap
            const newIndex = Math.round(scrollLeft / itemWidth);

            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < items.length) {
                currentIndex = newIndex;
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });
            }
        });
    }

    /* ============================================ */
    /* CARTA SECRETA - MODAL                          */
    /* ============================================ */
    function initCarta() {
        const btnCarta = document.getElementById('btn-carta');
        const cartaModal = document.getElementById('carta-modal');
        const cartaModalClose = document.getElementById('carta-modal-close');

        if (!btnCarta || !cartaModal) return;

        btnCarta.addEventListener('click', () => {
            cartaModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        cartaModalClose.addEventListener('click', closeCartaModal);
        cartaModal.querySelector('.carta-modal-overlay').addEventListener('click', closeCartaModal);

        function closeCartaModal() {
            cartaModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeCartaModal();
        });
    }

    /* ============================================ */
    /* REPRODUCTOR DE MÚSICA                          */
    /* ============================================ */
    function initMusicPlayer() {
        const toggle = document.getElementById('music-toggle');
        const panel = document.getElementById('music-panel');
        const playBtn = document.getElementById('music-play');
        const audio = document.getElementById('audio-player');
        const progressBar = document.getElementById('music-progress-bar');
        const progressFill = document.getElementById('music-progress-fill');
        const currentTimeEl = document.getElementById('music-current');
        const durationEl = document.getElementById('music-duration');
        const volumeSlider = document.getElementById('volume-slider');

        if (!toggle || !audio) return;

        let isPlaying = false;

        // Toggle panel
        toggle.addEventListener('click', () => {
            panel.classList.toggle('active');
        });

        // Play/Pause
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                playBtn.textContent = '▶';
                toggle.querySelector('.music-icon').style.animation = 'none';
            } else {
                audio.play().catch(e => {
                    console.log('Audio no disponible:', e.message);
                    // Mostrar mensaje amigable
                    playBtn.textContent = '▶';
                });
                playBtn.textContent = '⏸';
                toggle.querySelector('.music-icon').style.animation = 'pulse-music 1s ease-in-out infinite';
            }
            isPlaying = !isPlaying;
        });

        // Actualizar progreso
        audio.addEventListener('timeupdate', () => {
            if (audio.duration) {
                const progress = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = progress + '%';
                currentTimeEl.textContent = formatTime(audio.currentTime);
                durationEl.textContent = formatTime(audio.duration);
            }
        });

        // Click en barra de progreso
        progressBar.addEventListener('click', (e) => {
            if (audio.duration) {
                const rect = progressBar.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const progress = clickX / rect.width;
                audio.currentTime = progress * audio.duration;
            }
        });

        // Volumen
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value / 100;
        });

        // Audio ended
        audio.addEventListener('ended', () => {
            isPlaying = false;
            playBtn.textContent = '▶';
            progressFill.style.width = '0%';
        });

        // Audio loaded metadata
        audio.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(audio.duration);
        });

        function formatTime(seconds) {
            if (isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        // Cerrar panel al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !panel.contains(e.target)) {
                panel.classList.remove('active');
            }
        });
    }

    /* ============================================ */
    /* CORAZONES FLOTANTES EN SECCIÓN FINAL           */
    /* ============================================ */
    function initFloatingHeartsFinal() {
        const container = document.getElementById('floating-hearts-final');
        if (!container) return;

        createFloatingHearts('#floating-hearts-final', 20);
    }

    /* ============================================ */
    /* NAVEGACIÓN SCROLL SPY                          */
    /* ============================================ */
    function initNavScroll() {
        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPos = window.scrollY + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });

            // Mostrar/ocultar navegación según scroll
            if (window.scrollY > 100) {
                floatingNav.classList.add('visible');
            } else {
                floatingNav.classList.remove('visible');
            }
        });

        // Smooth scroll para links de navegación
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    /* ============================================ */
    /* EFECTO PARALLAX SUTIL                          */
    /* ============================================ */
    function initParallax() {
        const heroSection = document.querySelector('.hero-section');

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (heroSection && scrolled < window.innerHeight) {
                const parallaxElements = heroSection.querySelectorAll('.hero-content');
                parallaxElements.forEach(el => {
                    el.style.transform = `translateY(${scrolled * 0.3}px)`;
                });
            }
        });
    }

    /* ============================================ */
    /* INICIALIZACIÓN GENERAL                         */
    /* ============================================ */
    function init() {
        initWelcomeScreen();
        initParallax();

        // Prevenir errores de consola
        window.addEventListener('error', (e) => {
            console.warn('Error capturado:', e.message);
        });

        // Prevenir comportamiento por defecto en touch para mejor UX
        document.addEventListener('touchmove', (e) => {
            if (e.target.closest('.galeria-track')) {
                // Permitir scroll horizontal en galería
            }
        }, { passive: true });
    }

    // Iniciar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
