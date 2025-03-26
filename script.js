// Navigation Menu Toggle for Mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Smooth Scrolling for Navigation Links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    const nav = document.querySelector('.nav-links');
                    const burger = document.querySelector('.burger');
                    if (nav.classList.contains('nav-active')) {
                        nav.classList.remove('nav-active');
                        burger.classList.remove('toggle');
                        
                        navLinks.forEach(link => {
                            link.style.animation = '';
                        });
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
};

// Sticky Header on Scroll with Color Change
const stickyHeader = () => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 200, 83, 0.2)';
        } else {
            header.style.backgroundColor = 'var(--darker-color)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });
};

// Form Submission Handler
const formHandler = () => {
    const form = document.getElementById('interest-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const grade = document.getElementById('grade').value;
            const message = document.getElementById('message').value;
            
            // Get selected interests
            const interestCheckboxes = document.querySelectorAll('input[name="interests"]:checked');
            const interests = Array.from(interestCheckboxes).map(checkbox => checkbox.value);
            
            // In a real application, you would send this data to a server
            // For now, we'll just log it and show a success message
            console.log({
                name,
                email,
                grade,
                interests,
                message
            });
            
            // Show success message
            form.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You for Your Interest!</h3>
                    <p>We've received your information and will contact you soon with more details about the Myers Park TSA Club.</p>
                </div>
            `;
        });
    }
};

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-stats, .events-grid, .competition-categories, .gallery-grid, .join-content, .contact-content, .category, .stat-box, .event-card, .gallery-item, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Current Year for Copyright
const updateCopyright = () => {
    const copyrightYear = document.querySelector('.copyright p');
    if (copyrightYear) {
        const currentYear = new Date().getFullYear();
        copyrightYear.textContent = copyrightYear.textContent.replace('2023', currentYear);
    }
};

// Tech-inspired particle animation for hero section
const createParticles = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Set styles
        particle.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: var(--primary-color);
            border-radius: 50%;
            opacity: ${opacity};
            z-index: 1;
            animation: float ${duration}s linear infinite;
        `;
        
        hero.appendChild(particle);
    }
};

// Add typing effect to hero title
const typingEffect = () => {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
};

// Add hover effect to gallery items
const galleryHoverEffect = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const caption = item.querySelector('.gallery-caption');
            caption.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', () => {
            const caption = item.querySelector('.gallery-caption');
            caption.style.transform = 'translateY(100%)';
        });
    });
};

// Add CSS class for animation
const addAnimationClass = () => {
    const elements = document.querySelectorAll('.about-stats, .events-grid, .competition-categories, .gallery-grid, .join-content, .contact-content');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 200);
    });
};

// Add glowing effect to tech elements
const addGlowEffect = () => {
    const techElements = document.querySelectorAll('.category i, .stat-box i, .contact-item i, .tech-dots, .tech-line');
    
    techElements.forEach(element => {
        setInterval(() => {
            element.classList.toggle('glow');
        }, Math.random() * 2000 + 1000);
    });
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    smoothScroll();
    stickyHeader();
    formHandler();
    animateOnScroll();
    updateCopyright();
    createParticles();
    typingEffect();
    galleryHoverEffect();
    addAnimationClass();
    addGlowEffect();
    
    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(0) translateX(20px);
            }
            75% {
                transform: translateY(20px) translateX(10px);
            }
            100% {
                transform: translateY(0) translateX(0);
            }
        }
        
        .gallery-caption {
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .glow {
            filter: brightness(1.5);
            text-shadow: 0 0 10px var(--primary-color);
        }
    `;
    document.head.appendChild(style);
}); 