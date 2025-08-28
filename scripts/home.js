// JavaScript spécifique à la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    initTypingAnimation();
    initFloatingIcons();
    initScrollIndicator();
    initQuickLinks();
});

// Animation de typing pour le hero
function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;
    
    const texts = [
        'Développeur Full Stack',
        'Expert en TIC',
        'Passionné de Tech',
        'Créateur d\'Innovation'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseTime = 2000;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentText.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(typeEffect, speed);
    }
    
    // Démarrer l'animation après un délai
    setTimeout(typeEffect, 1000);
}

// Animation des icônes flottantes
function initFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        // Position aléatoire initiale
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        
        icon.style.setProperty('--random-x', `${randomX}%`);
        icon.style.setProperty('--random-y', `${randomY}%`);
        
        // Animation continue
        setInterval(() => {
            const newX = Math.random() * 20 - 10; // -10 à +10
            const newY = Math.random() * 20 - 10;
            
            icon.style.transform = `translate(${newX}px, ${newY}px)`;
        }, 3000 + (index * 500));
    });
}

// Gestion de l'indicateur de scroll
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const quickIntro = document.querySelector('.quick-intro');
    
    if (!scrollIndicator || !quickIntro) return;
    
    window.addEventListener('scroll', () => {
        const introPosition = quickIntro.offsetTop;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        
        if (scrollPosition > introPosition) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
        }
    });
}

// Animation des liens rapides
function initQuickLinks() {
    const quickLinks = document.querySelectorAll('.quick-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3
    });
    
    quickLinks.forEach(link => {
        observer.observe(link);
    });
}

// Effet parallaxe pour le hero
function initHeroParallax() {
    const heroSection = document.querySelector('.hero-home');
    const heroContent = heroSection?.querySelector('.hero-content');
    
    if (!heroSection || !heroContent) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        heroContent.style.transform = `translateY(${parallax}px)`;
    });
}

// Animation des cartes de statistiques au survol
function initStatCardsHover() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Effet de pulsation sur l'icône
            const number = card.querySelector('h3');
            if (number) {
                number.style.transform = 'scale(1.1)';
                number.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const number = card.querySelector('h3');
            if (number) {
                number.style.transform = 'scale(1)';
            }
        });
    });
}

// Gestion de la progression de lecture (pour le scroll)
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 70px;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient-primary);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        progressBar.style.width = scrolled + '%';
    });
}

// Animation d'entrée des éléments
function initEntranceAnimations() {
    const animatedElements = document.querySelectorAll('.hero-text, .hero-image, .intro-content');
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 300 + 500);
    });
}

// Gestion des boutons avec effets sonores (optionnel)
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Effet de ripple
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                background-color: rgba(255, 255, 255, 0.7);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Animation des icônes de technologie
function initTechIconsAnimation() {
    const techIcons = document.querySelectorAll('.floating-icon i');
    
    techIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.3) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Animation automatique périodique
        setInterval(() => {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        }, 5000 + (index * 1000));
    });
}

// Détection de l'inactivité utilisateur
function initUserActivityDetection() {
    let inactivityTimer;
    const inactivityTime = 30000; // 30 secondes
    
    function resetTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            // Animation subtile pour attirer l'attention
            const quickLinks = document.querySelectorAll('.quick-link');
            quickLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.animation = 'pulse 0.5s ease';
                    setTimeout(() => {
                        link.style.animation = '';
                    }, 500);
                }, index * 100);
            });
        }, inactivityTime);
    }
    
    // Événements à surveiller
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, resetTimer, true);
    });
    
    resetTimer();
}

// Initialisation complète de la page d'accueil
function initHomePage() {
    initHeroParallax();
    initStatCardsHover();
    initReadingProgress();
    initEntranceAnimations();
    initButtonEffects();
    initTechIconsAnimation();
    initUserActivityDetection();
}

// Lancer après le chargement complet
window.addEventListener('load', initHomePage);

// CSS pour les animations spécifiques à l'accueil
const homeAnimationCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

.floating-icon {
    transition: all 0.3s ease;
}

.quick-link {
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.6s ease;
}

.quick-link.animate-in {
    transform: translateY(0);
    opacity: 1;
}

.hero-stats .stat-card:hover {
    transform: translateY(-8px) scale(1.02);
}

.btn {
    position: relative;
    overflow: hidden;
}

.reading-progress {
    box-shadow: 0 2px 4px rgba(135, 206, 235, 0.3);
}

/* Animation pour les éléments inactifs */
@keyframes subtle-glow {
    0%, 100% {
        box-shadow: 0 0 5px rgba(32, 178, 170, 0.3);
    }
    50% {
        box-shadow: 0 0 20px rgba(32, 178, 170, 0.6);
    }
}

.inactive-highlight {
    animation: subtle-glow 2s ease-in-out infinite;
}
`;

// Ajouter les styles spécifiques à l'accueil
const homeStyle = document.createElement('style');
homeStyle.textContent = homeAnimationCSS;
document.head.appendChild(homeStyle);
