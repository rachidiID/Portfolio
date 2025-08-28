// Scripts spécifiques pour les pages Skills, Projects, Experience et Contact
document.addEventListener('DOMContentLoaded', function() {
    
    // =============================================================================
    // SKILLS PAGE ANIMATIONS
    // =============================================================================
    
    function initSkillsAnimations() {
        if (!document.querySelector('.skills-section')) return;
        
        // Animation des barres de compétences
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const targetWidth = progressBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 500);
                    
                    observer.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
        
        // Animation d'apparition des cartes de compétences
        const skillCards = document.querySelectorAll('.skill-category, .soft-skill-card');
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        skillCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            cardObserver.observe(card);
        });
    }
    
    // =============================================================================
    // PROJECTS PAGE INTERACTIONS
    // =============================================================================
    
    function initProjectsInteractions() {
        if (!document.querySelector('.projects-section')) return;
        
        // Système de filtres de projets
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Mise à jour de l'état actif des boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filtrage des projets
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category') || '';
                    const shouldShow = filter === 'all' || categories.includes(filter);
                    
                    if (shouldShow) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Animation des barres de progression des projets en cours
        const progressBars = document.querySelectorAll('.progress-fill');
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 500);
                    
                    progressObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => progressObserver.observe(bar));
        
        // Animation d'apparition des cartes de projets
        const projectCardsAnim = document.querySelectorAll('.project-card, .current-project-card');
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                    projectObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        projectCardsAnim.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            projectObserver.observe(card);
        });
    }
    
    // =============================================================================
    // EXPERIENCE PAGE ANIMATIONS
    // =============================================================================
    
    function initExperienceAnimations() {
        if (!document.querySelector('.experience-section')) return;
        
        // Animation des éléments de timeline
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 300);
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
            item.style.transition = 'all 0.8s ease';
            timelineObserver.observe(item);
        });
        
        // Animation des compteurs de statistiques
        const statNumbers = document.querySelectorAll('.stat-number');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;
                    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                    
                    if (!isNaN(numericValue)) {
                        animateCounter(target, 0, numericValue, finalValue, 2000);
                    }
                    
                    statsObserver.unobserve(target);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => statsObserver.observe(stat));
        
        // Animation des témoignages
        const testimonials = document.querySelectorAll('.testimonial-card');
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    testimonialObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        testimonials.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            testimonialObserver.observe(card);
        });
    }
    
    // =============================================================================
    // CONTACT PAGE INTERACTIONS
    // =============================================================================
    
    function initContactInteractions() {
        if (!document.querySelector('.contact-section')) return;
        
        // Gestion du formulaire de contact
        const form = document.getElementById('contact-form');
        if (form) {
            const messageTextarea = document.getElementById('message');
            const charCount = document.getElementById('char-count');
            
            // Compteur de caractères
            if (messageTextarea && charCount) {
                messageTextarea.addEventListener('input', function() {
                    const count = this.value.length;
                    charCount.textContent = count;
                    
                    if (count > 500) {
                        charCount.style.color = '#e74c3c';
                    } else {
                        charCount.style.color = '#7f8c8d';
                    }
                });
            }
            
            // Validation en temps réel
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                input.addEventListener('input', function() {
                    if (this.classList.contains('error')) {
                        validateField(this);
                    }
                });
            });
            
            // Soumission du formulaire
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validation complète
                let isValid = true;
                inputs.forEach(input => {
                    if (!validateField(input)) {
                        isValid = false;
                    }
                });
                
                if (isValid) {
                    submitForm(this);
                } else {
                    showFormError('Veuillez corriger les erreurs avant de soumettre le formulaire.');
                }
            });
        }
        
        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                
                // Fermer tous les autres items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('i').classList.replace('fa-minus', 'fa-plus');
                    }
                });
                
                // Toggle l'item courant
                if (isOpen) {
                    item.classList.remove('active');
                    icon.classList.replace('fa-minus', 'fa-plus');
                } else {
                    item.classList.add('active');
                    icon.classList.replace('fa-plus', 'fa-minus');
                }
            });
        });
        
        // Animation des éléments de contact
        const contactItems = document.querySelectorAll('.contact-item, .contact-alt-item');
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    contactObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        contactItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.5s ease';
            contactObserver.observe(item);
        });
    }
    
    // =============================================================================
    // FONCTIONS UTILITAIRES
    // =============================================================================
    
    // Animation de compteur
    function animateCounter(element, start, end, originalText, duration) {
        const range = end - start;
        const startTime = Date.now();
        
        function updateCounter() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (range * progress));
            
            element.textContent = originalText.replace(/\d+/, current);
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        updateCounter();
    }
    
    // Validation de champ
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Vérification champ requis
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Ce champ est requis.';
        }
        
        // Validation email
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Veuillez entrer une adresse email valide.';
            }
        }
        
        // Validation téléphone
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Veuillez entrer un numéro de téléphone valide.';
            }
        }
        
        // Mise à jour visuelle
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        if (isValid) {
            field.classList.remove('error');
            field.style.borderColor = '#27ae60';
        } else {
            field.classList.add('error');
            field.style.borderColor = '#e74c3c';
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error';
            errorDiv.style.cssText = 'color: #e74c3c; font-size: 0.8rem; margin-top: 0.3rem;';
            errorDiv.textContent = errorMessage;
            field.parentNode.appendChild(errorDiv);
        }
        
        return isValid;
    }
    
    // Soumission du formulaire
    function submitForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Animation de soumission
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simulation d'envoi (remplacer par vraie logique d'envoi)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Envoyé !';
            submitBtn.style.backgroundColor = '#27ae60';
            
            // Afficher message de succès
            showFormSuccess('Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
            
            // Reset après 3 secondes
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                form.reset();
                
                // Reset compteur de caractères
                const charCount = document.getElementById('char-count');
                if (charCount) charCount.textContent = '0';
                
                // Supprimer les styles de validation
                const fields = form.querySelectorAll('input, select, textarea');
                fields.forEach(field => {
                    field.style.borderColor = '';
                    field.classList.remove('error');
                });
                
                // Supprimer les messages d'erreur
                const errors = form.querySelectorAll('.field-error');
                errors.forEach(error => error.remove());
                
            }, 3000);
        }, 2000);
    }
    
    // Messages de formulaire
    function showFormError(message) {
        showFormMessage(message, 'error');
    }
    
    function showFormSuccess(message) {
        showFormMessage(message, 'success');
    }
    
    function showFormMessage(message, type) {
        // Supprimer message existant
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Créer nouveau message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.cssText = `
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            font-weight: 500;
            ${type === 'error' ? 
                'background: #ffeaea; color: #e74c3c; border: 1px solid #e74c3c;' : 
                'background: #eafaf1; color: #27ae60; border: 1px solid #27ae60;'
            }
        `;
        messageDiv.textContent = message;
        
        const form = document.getElementById('contact-form');
        form.insertBefore(messageDiv, form.firstChild);
        
        // Auto-supprimer après 5 secondes
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
    
    // =============================================================================
    // INITIALISATION
    // =============================================================================
    
    // Initialiser toutes les fonctionnalités
    initSkillsAnimations();
    initProjectsInteractions();
    initExperienceAnimations();
    initContactInteractions();
    
    // Animation d'entrée générale pour tous les éléments
    const allCards = document.querySelectorAll('.page-header, .stat-card, .footer');
    const generalObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                generalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    allCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        generalObserver.observe(card);
    });
    
    console.log('Scripts des pages individuelles initialisés avec succès !');
});
