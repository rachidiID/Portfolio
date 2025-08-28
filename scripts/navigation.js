// Navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    initScrollEffects();
});

// Initialisation du menu hamburger
function initHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeMenu = document.getElementById('close-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Ouvrir le menu
    hamburgerMenu.addEventListener('click', () => {
        openMenu();
    });

    // Fermer le menu avec le bouton X
    closeMenu.addEventListener('click', () => {
        closeMenu();
    });

    // Fermer le menu en cliquant sur l'overlay
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            closeMenu();
        }
    });

    // Fermer le menu en cliquant sur un lien
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });

    function openMenu() {
        hamburgerMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animation des liens du menu
        const menuLinks = document.querySelectorAll('.menu-link');
        menuLinks.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.1}s`;
            link.classList.add('animate-in');
        });
    }

    function closeMenu() {
        hamburgerMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Nettoyer les animations
        const menuLinks = document.querySelectorAll('.menu-link');
        menuLinks.forEach(link => {
            link.classList.remove('animate-in');
            link.style.animationDelay = '';
        });
    }
}

// Effets de scroll
function initScrollEffects() {
    const navbar = document.querySelector('.hamburger-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Animation CSS pour les liens du menu
const menuAnimationCSS = `
@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.menu-link.animate-in {
    animation: slideInFromRight 0.4s ease forwards;
}
`;

// Ajouter les styles d'animation
const style = document.createElement('style');
style.textContent = menuAnimationCSS;
document.head.appendChild(style);

// Gestion des pages actives
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('.menu-link');
    
    menuLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Appeler au chargement
setActivePage();

// Navigation fluide pour les liens internes
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.hamburger-nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});

// Préchargement des pages pour une navigation plus fluide
function preloadPages() {
    const pages = [
        '../index.html',
        'about.html',
        'education.html',
        'skills.html',
        'projects.html',
        'experience.html',
        'contact.html'
    ];
    
    pages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
    });
}

// Lancer le préchargement après 2 secondes
setTimeout(preloadPages, 2000);

// Gestion des erreurs réseau
window.addEventListener('online', () => {
    console.log('Connexion internet rétablie');
});

window.addEventListener('offline', () => {
    console.log('Connexion internet perdue');
    // Optionnel: afficher un message à l'utilisateur
});

// Performance monitoring
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            if (entry.entryType === 'navigation') {
                console.log(`Page loaded in ${entry.loadEventEnd - entry.loadEventStart}ms`);
            }
        });
    });
    
    observer.observe({ entryTypes: ['navigation'] });
}
