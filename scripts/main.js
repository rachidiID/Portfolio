/**
 * Main JavaScript - Animations, Interactions & Effects
 * Portfolio - Rachidi Adébissi IDONIYI
 */

(function () {
    'use strict';

    // ========================================
    // Intersection Observer - Scroll Animations
    // ========================================
    const AnimationObserver = {
        init() {
            const animatedElements = document.querySelectorAll(
                '.timeline-item, .skill-category, .project-card, .experience-card, ' +
                '.stat-card, .passion-item, .value-item, .fun-fact, ' +
                '.bring-card, .soft-skill-card, .contact-method, .faq-item, ' +
                '.content-section, .skill-category-card, .goal-milestone'
            );

            if (!animatedElements.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`;
                observer.observe(el);
            });

            // Add the CSS for animate-in
            const style = document.createElement('style');
            style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
            document.head.appendChild(style);
        }
    };

    // ========================================
    // Skill Bar Animation
    // ========================================
    const SkillBars = {
        init() {
            const skillBars = document.querySelectorAll('.skill-progress');
            if (!skillBars.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 200);
                        observer.unobserve(bar);
                    }
                });
            }, { threshold: 0.3 });

            skillBars.forEach(bar => {
                bar.style.width = '0%';
                bar.style.transition = 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                observer.observe(bar);
            });
        }
    };

    // ========================================
    // Typing Effect (Hero Section)
    // ========================================
    const TypingEffect = {
        init() {
            const typingElement = document.querySelector('.typing-text');
            if (!typingElement) return;

            const texts = [
                'Développeur Full-Stack',
                'Junior en TIC',
                'Passionné de Technologie',
                'Étudiant en Sciences de Données'
            ];

            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let delay = 100;

            const type = () => {
                const currentText = texts[textIndex];

                if (isDeleting) {
                    typingElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    delay = 50;
                } else {
                    typingElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    delay = 100;
                }

                if (!isDeleting && charIndex === currentText.length) {
                    delay = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    delay = 500;
                }

                setTimeout(type, delay);
            };

            setTimeout(type, 1000);
        }
    };

    // ========================================
    // Counter Animation (Stats)
    // ========================================
    const CounterAnimation = {
        init() {
            const counters = document.querySelectorAll('.stat-content h3');
            if (!counters.length) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach(counter => observer.observe(counter));
        },

        animateCounter(element) {
            const text = element.textContent.trim();
            const match = text.match(/(\d+)(\+?)/);
            if (!match) return;

            const target = parseInt(match[1]);
            const suffix = match[2] || '';
            let current = 0;
            const increment = Math.ceil(target / 30);
            const duration = 1500;
            const stepTime = duration / (target / increment);

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = current + suffix;
            }, stepTime);
        }
    };

    // ========================================
    // Project Filters
    // ========================================
    const ProjectFilters = {
        init() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');
            if (!filterBtns.length || !projectCards.length) return;

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const filter = btn.getAttribute('data-filter');

                    // Update active button
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Filter cards with animation
                    projectCards.forEach(card => {
                        const category = card.getAttribute('data-category');
                        if (filter === 'all' || category === filter) {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            card.style.display = '';
                            setTimeout(() => {
                                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        }
    };

    // ========================================
    // FAQ Accordion
    // ========================================
    const FAQAccordion = {
        init() {
            const faqItems = document.querySelectorAll('.faq-question');
            if (!faqItems.length) return;

            faqItems.forEach(item => {
                item.addEventListener('click', () => {
                    const parent = item.parentElement;
                    const answer = parent.querySelector('.faq-answer');
                    const icon = item.querySelector('i');
                    const isOpen = parent.classList.contains('active');

                    // Close all
                    document.querySelectorAll('.faq-item').forEach(faq => {
                        faq.classList.remove('active');
                        const ans = faq.querySelector('.faq-answer');
                        if (ans) ans.style.maxHeight = null;
                        const ic = faq.querySelector('.faq-question i');
                        if (ic) ic.style.transform = '';
                    });

                    // Open clicked if it wasn't open
                    if (!isOpen) {
                        parent.classList.add('active');
                        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
                        if (icon) icon.style.transform = 'rotate(180deg)';
                    }
                });
            });
        }
    };

    // ========================================
    // Contact Form
    // ========================================
    const ContactForm = {
        init() {
            const form = document.getElementById('contact-form');
            if (!form) return;

            // Character counter
            const textarea = document.getElementById('message');
            const charCount = document.getElementById('char-count');
            if (textarea && charCount) {
                textarea.addEventListener('input', () => {
                    const count = textarea.value.length;
                    charCount.textContent = count;
                    if (count > 900) {
                        charCount.style.color = 'var(--color-coral)';
                    } else {
                        charCount.style.color = '';
                    }
                });
            }

            // Form submission
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = form.querySelector('.btn-submit');
                const originalText = submitBtn.innerHTML;

                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
                submitBtn.disabled = true;

                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                    submitBtn.classList.add('success');

                    setTimeout(() => {
                        form.reset();
                        if (charCount) charCount.textContent = '0';
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('success');
                    }, 3000);
                }, 1500);
            });

            // Focus effects
            form.querySelectorAll('input, textarea, select').forEach(input => {
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('focused');
                });
                input.addEventListener('blur', () => {
                    input.parentElement.classList.remove('focused');
                });
            });
        }
    };

    // ========================================
    // Smooth Scroll
    // ========================================
    const SmoothScroll = {
        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    if (href === '#') return;
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 80; // Nav height
                        const top = target.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                });
            });
        }
    };

    // ========================================
    // Page Load Animation
    // ========================================
    const PageLoad = {
        init() {
            document.body.classList.add('page-loaded');

            // Animate page header
            const pageHeader = document.querySelector('.page-header-content');
            if (pageHeader) {
                pageHeader.style.opacity = '0';
                pageHeader.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    pageHeader.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    pageHeader.style.opacity = '1';
                    pageHeader.style.transform = 'translateY(0)';
                }, 100);
            }

            // Animate hero section
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.opacity = '0';
                heroContent.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
                    heroContent.style.opacity = '1';
                    heroContent.style.transform = 'translateY(0)';
                }, 200);
            }

            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.opacity = '0';
                heroImage.style.transform = 'translateX(30px)';
                setTimeout(() => {
                    heroImage.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
                    heroImage.style.opacity = '1';
                    heroImage.style.transform = 'translateX(0)';
                }, 200);
            }
        }
    };

    // ========================================
    // Back to Top Button
    // ========================================
    const BackToTop = {
        init() {
            const btn = document.createElement('button');
            btn.className = 'back-to-top';
            btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
            btn.setAttribute('aria-label', 'Retour en haut');
            document.body.appendChild(btn);

            // Add styles
            const style = document.createElement('style');
            style.textContent = `
                .back-to-top {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    color: white;
                    border: none;
                    cursor: pointer;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                    z-index: 999;
                    box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
                }
                .back-to-top.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .back-to-top:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.5);
                }
            `;
            document.head.appendChild(style);

            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
            }, { passive: true });

            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    };

    // ========================================
    // Initialize All Modules
    // ========================================
    document.addEventListener('DOMContentLoaded', () => {
        PageLoad.init();
        AnimationObserver.init();
        SkillBars.init();
        TypingEffect.init();
        CounterAnimation.init();
        ProjectFilters.init();
        FAQAccordion.init();
        ContactForm.init();
        SmoothScroll.init();
        BackToTop.init();
    });
})();
