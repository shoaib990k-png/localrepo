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

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('show') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

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
        document.getElementById('progress-bar').style.width = scrolled + '%';
    });

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
            }
        });
    });

    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0,
        rootMargin: '0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statValues = [500, 850, 50, 15];
    
    statNumbers.forEach((stat, index) => {
        const targetValue = statValues[index];
        const duration = 1500;
        const increment = targetValue / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < targetValue) {
                current += increment;
                if (current > targetValue) current = targetValue;
                stat.textContent = Math.floor(current);
                setTimeout(updateCounter, 16);
            }
        };
        
        // Start counter when element is visible
        const statObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                statObserver.unobserve(stat);
            }
        }, { threshold: 0 });
        
        statObserver.observe(stat);
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    function handleFormSubmit(form, successMessage) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> ' + successMessage;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }

    if (contactForm) handleFormSubmit(contactForm, 'Sent!');
    if (newsletterForm) handleFormSubmit(newsletterForm, 'Subscribed!');

    // Video Modal
    const videoModal = document.getElementById('videoModal');
    const watchDemoBtn = document.getElementById('watchDemoBtn');
    const closeVideoModal = document.querySelector('.video-modal');

    // Start Free Trial Button
    const startTrialBtn = document.getElementById('startTrialBtn');
    if (startTrialBtn) {
        startTrialBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }

    if (watchDemoBtn) {
        watchDemoBtn.addEventListener('click', () => {
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeVideoModal) {
        closeVideoModal.addEventListener('click', (e) => {
            if (e.target === closeVideoModal) {
                videoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                videoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Testimonial slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 1; // Start with Jane Smith (index 1)

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
});
