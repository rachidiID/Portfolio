// Variables globales
let lastScrollTop = 0;
let scrollIndicator;

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initSkillBars();
    initContactForm();
    initAnimations();
    initScrollIndicator();
    initSmoothScrolling();
    initTextAnimations();
});

// Indicateur de progression de scroll
function initScrollIndicator() {
    // Créer l'indicateur de progression
    scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.style.transform = 'scaleX(0)';
    document.body.appendChild(scrollIndicator);

    // Mettre à jour la barre de progression
    function updateScrollIndicator() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
    }

    window.addEventListener('scroll', updateScrollIndicator);
}

// Défilement fluide amélioré
function initSmoothScrolling() {
    // Améliorer les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Compensation pour la navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                const navMenu = document.getElementById('nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const navToggle = document.getElementById('nav-toggle');
                    const bars = navToggle.querySelectorAll('.bar');
                    bars.forEach(bar => {
                        bar.style.transform = 'none';
                        bar.style.opacity = '1';
                    });
                }
            }
        });
    });
}

// Animations de texte avancées
function initTextAnimations() {
    // Observer pour les animations à l'apparition
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animation spéciale pour les cartes
                if (entry.target.classList.contains('card')) {
                    entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                }
                
                // Animation pour les textes
                if (entry.target.classList.contains('fade-in-text')) {
                    animateText(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments animables
    document.querySelectorAll('.card, .fade-in-text, .project-card, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Animation de texte caractère par caractère
function animateText(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.animation = `fadeInChar 0.05s ease forwards`;
        span.style.animationDelay = `${index * 0.03}s`;
        element.appendChild(span);
    });
}

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle menu mobile
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animation du burger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Effet scroll sur la navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Navigation active selon la section
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

// Mise à jour du lien actif dans la navigation
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Effets de scroll et animations
function initScrollEffects() {
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Animation spéciale pour les barres de compétences
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillBars(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments animables
    const animateElements = document.querySelectorAll('.stat-item, .timeline-item, .skill-category, .project-card, .experience-card');
    animateElements.forEach(el => observer.observe(el));
}

// Animation des barres de compétences
function initSkillBars() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    skillProgressBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

function animateSkillBars(skillCategory) {
    const skillBars = skillCategory.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width');
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 200);
    });
}

// Formulaire de contact amélioré
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Validation en temps réel
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearValidationError(input));
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation complète avant soumission
            if (!validateForm(this)) {
                return;
            }
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Soumission avec animation
            submitContactForm(data, this);
        });
    }
}

// Validation d'un champ individuel
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    // Supprimer les classes d'erreur précédentes
    field.classList.remove('error', 'success');

    switch (field.type) {
        case 'email':
            if (!value) {
                isValid = false;
                message = 'L\'email est requis';
            } else if (!isValidEmail(value)) {
                isValid = false;
                message = 'Format d\'email invalide';
            }
            break;
        case 'text':
            if (field.name === 'name' && (!value || value.length < 2)) {
                isValid = false;
                message = 'Le nom doit contenir au moins 2 caractères';
            }
            break;
        case 'textarea':
            if (!value || value.length < 10) {
                isValid = false;
                message = 'Le message doit contenir au moins 10 caractères';
            }
            break;
    }

    // Appliquer le style approprié
    if (value) {
        field.classList.add(isValid ? 'success' : 'error');
        showFieldMessage(field, message, isValid);
    }

    return isValid;
}

// Supprimer les erreurs de validation
function clearValidationError(field) {
    field.classList.remove('error');
    const errorMsg = field.parentNode.querySelector('.field-error');
    if (errorMsg) {
        errorMsg.remove();
    }
}

// Afficher un message de validation
function showFieldMessage(field, message, isValid) {
    // Supprimer le message précédent
    const existingMsg = field.parentNode.querySelector('.field-error, .field-success');
    if (existingMsg) {
        existingMsg.remove();
    }

    if (message) {
        const msgElement = document.createElement('div');
        msgElement.className = isValid ? 'field-success' : 'field-error';
        msgElement.textContent = message;
        msgElement.style.cssText = `
            font-size: 0.8rem;
            margin-top: 0.3rem;
            color: ${isValid ? '#27ae60' : '#e74c3c'};
            animation: slideInDown 0.3s ease;
        `;
        field.parentNode.appendChild(msgElement);
    }
}

// Validation complète du formulaire
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

// Validation email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Soumission du formulaire de contact avec animations
function submitContactForm(data, form) {
    // Bouton de soumission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Animation de chargement
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    
    // Ajouter un spinner
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #ffffff30;
        border-top: 2px solid #ffffff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-left: 10px;
    `;
    submitBtn.appendChild(spinner);
    
    // Simulation d'envoi (remplacer par votre API)
    setTimeout(() => {
        // Supprimer le spinner
        submitBtn.removeChild(spinner);
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Simuler le succès (90% de chance de succès)
        const isSuccess = Math.random() > 0.1;
        
        if (isSuccess) {
            submitBtn.textContent = '✓ Message envoyé !';
            submitBtn.style.backgroundColor = '#27ae60';
            
            // Réinitialiser le formulaire
            form.reset();
            form.querySelectorAll('.success, .error').forEach(el => {
                el.classList.remove('success', 'error');
            });
            form.querySelectorAll('.field-error, .field-success').forEach(el => {
                el.remove();
            });
            
            showNotification('Votre message a été envoyé avec succès ! Je vous répondrai bientôt.', 'success');
            
            // Animation de succès sur le formulaire
            form.style.animation = 'pulse 0.6s ease';
            
        } else {
            submitBtn.textContent = '✗ Erreur d\'envoi';
            submitBtn.style.backgroundColor = '#e74c3c';
            showNotification('Une erreur est survenue. Veuillez réessayer plus tard.', 'error');
        }
        
        // Restaurer le bouton après 3 secondes
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
        }, 3000);
        
    }, 2000); // Simulation de 2 secondes d'envoi
}

// Système de notifications amélioré
function showNotification(message, type = 'info') {
    // Supprimer les notifications précédentes
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles de la notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        max-width: 400px;
        word-wrap: break-word;
        animation: slideInRight 0.5s ease;
        cursor: pointer;
    `;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 5000);
    
    // Fermeture au clic
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.5s ease forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    });
}
    const submitBtn = document.querySelector('.contact-form .btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulation d'un appel API (remplacez par votre logique)
    setTimeout(() => {
        // Réinitialisation du bouton
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Message de succès
        showNotification('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
        
        // Réinitialisation du formulaire
        document.querySelector('.contact-form').reset();
        
        // Ici, vous pourriez intégrer un service comme EmailJS, Formspree, etc.
        console.log('Données du formulaire:', data);
    }, 2000);
}

// Validation email améliorée
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction utilitaire pour débugger les performances
function debugPerformance() {
    if (typeof performance !== 'undefined') {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        console.log('Temps de chargement:', navigationTiming.loadEventEnd - navigationTiming.navigationStart, 'ms');
    }
}

// Initialiser le debug des performances
window.addEventListener('load', debugPerformance);

// Système de notifications
function showNotification(message, type = 'info') {
    // Suppression de l'ancienne notification s'il y en a une
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Création de la nouvelle notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Styles CSS inline pour la notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: all 0.3s ease;
        ${type === 'success' ? 'background: linear-gradient(135deg, #20B2AA, #7FFFD4); color: white;' : ''}
        ${type === 'error' ? 'background: linear-gradient(135deg, #ff6b6b, #ffa8a8); color: white;' : ''}
        ${type === 'info' ? 'background: linear-gradient(135deg, #87CEEB, #4A90E2); color: white;' : ''}
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Ajout au DOM
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Gestion de la fermeture
    const closeNotification = () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    };
    
    closeBtn.addEventListener('click', closeNotification);
    
    // Auto-fermeture après 5 secondes
    setTimeout(closeNotification, 5000);
}

// Animations diverses
function initAnimations() {
    // Animation de typing pour le titre principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Optionnel : vous pouvez ajouter un effet de typing ici
    }
    
    // Animation des statistiques au scroll
    const statItems = document.querySelectorAll('.stat-item h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    statItems.forEach(stat => statsObserver.observe(stat));
}

// Animation de compteur pour les statistiques
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }, 16);
}

// Gestion du thème sombre (optionnel)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        // Vérifier le thème sauvegardé
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Utilitaires
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance : utilisation de debounce pour le scroll
const debouncedScroll = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Gestion des erreurs JavaScript
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
    // Optionnel : envoyer l'erreur à un service de logging
});

// Service Worker pour la mise en cache (optionnel)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker enregistré avec succès:', registration);
            })
            .catch(error => {
                console.log('Échec de l\'enregistrement du Service Worker:', error);
            });
    });
}

// Export des fonctions pour tests unitaires (optionnel)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        showNotification,
        animateCounter
    };
}
