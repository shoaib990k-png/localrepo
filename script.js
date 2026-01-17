document.addEventListener('DOMContentLoaded', function () {
    // Create floating particles
    const particlesContainer = document.getElementById('particles-container');
    const colors = ['#3b82f6', '#8b5cf6', '#f97316'];

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 20 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;

        particlesContainer.appendChild(particle);
    }

    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progress-bar').style.width = `${scrolled}%`;
    });

    // Custom cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;

        cursorOutline.style.left = `${e.clientX}px`;
        cursorOutline.style.top = `${e.clientY}px`;
    });

    // Interactive cursor effects
    document.querySelectorAll('a, button, .feature-card, .stat-item').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderWidth = '1px';
        });

        element.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderWidth = '2px';
        });
    });

    // Animations on scroll
    const animatedElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, 100);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statValues = [500, 850, 50, 15];
    const duration = 2000;
    const interval = 20;

    statNumbers.forEach((stat, index) => {
        let current = 0;
        const increment = Math.ceil(statValues[index] / (duration / interval));
        const timer = setInterval(() => {
            current += increment;
            if (current >= statValues[index]) {
                clearInterval(timer);
                current = statValues[index];
            }
            stat.textContent = current;
        }, interval);
    });

    // Testimonial slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonialCards[index].classList.add('active');
        dots[index].classList.add('active');
        currentTestimonial = index;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            showTestimonial(index);
        });
    });

    // Auto slide testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 6000);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }

                // Close globe menu if open
                if (globeMenu.classList.contains('show')) {
                    globeMenu.classList.remove('show');
                }
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('show') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Form submission animation
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    function handleFormSubmit(form, successMessage) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> ' + successMessage;
                submitBtn.style.background = 'var(--success)';

                // Reset form
                form.reset();

                // Revert after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 2000);
        });
    }

    if (contactForm) {
        handleFormSubmit(contactForm, 'Sent Successfully!');
    }

    if (newsletterForm) {
        handleFormSubmit(newsletterForm, 'Subscribed!');
    }

    // Video Modal Functionality
    const videoModal = document.getElementById('videoModal');
    const watchDemoBtn = document.getElementById('watchDemoBtn');
    const closeVideoModal = document.getElementById('closeVideoModal');

    // Open video modal
    if (watchDemoBtn) {
        watchDemoBtn.addEventListener('click', () => {
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close video modal
    if (closeVideoModal) {
        closeVideoModal.addEventListener('click', () => {
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside the content
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Globe Menu Toggle
    const globeBtn = document.querySelector('.globe-btn');
    const globeMenu = document.querySelector('.globe-menu');

    if (globeBtn && globeMenu) {
        globeBtn.addEventListener('click', () => {
            globeMenu.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!globeBtn.contains(e.target) && !globeMenu.contains(e.target)) {
                globeMenu.classList.remove('show');
            }
        });
    }
});
