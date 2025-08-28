// Variables globales
let lastScrollTop = 0;

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initSkillBars();
    initContactForm();
    initAnimations();
});

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

// Formulaire de contact
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Validation simple
            if (!data.name || !data.email || !data.message) {
                showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }
            
            if (!isValidEmail(data.email)) {
                showNotification('Veuillez entrer une adresse email valide.', 'error');
                return;
            }
            
            // Simulation d'envoi (à remplacer par votre logique d'envoi)
            submitContactForm(data);
        });
    }
}

// Validation email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Soumission du formulaire de contact
function submitContactForm(data) {
    // Affichage du loading
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
