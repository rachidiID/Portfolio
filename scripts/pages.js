// JavaScript spécifique aux pages individuelles
document.addEventListener('DOMContentLoaded', function() {
    initPageAnimations();
    initSkillsAnimation();
    initStatsAnimation();
    initTimelineAnimation();
});

// Animations générales des pages
function initPageAnimations() {
    // Intersection Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animations spéciales selon le type d'élément
                if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
                
                if (entry.target.classList.contains('stat-card')) {
                    animateStatCard(entry.target);
                }
                
                if (entry.target.classList.contains('skill-category-card')) {
                    animateSkillCategory(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments animables
    const animateElements = document.querySelectorAll(`
        .content-section,
        .passion-item,
        .value-item,
        .stat-card,
        .fun-fact,
        .timeline-item,
        .skill-category-card,
        .certification-card,
        .profile-card
    `);
    
    animateElements.forEach(el => observer.observe(el));
}

// Animation des éléments de timeline
function animateTimelineItem(item) {
    const content = item.querySelector('.timeline-content');
    const dot = item.querySelector('.timeline-dot');
    
    // Animation du point
    setTimeout(() => {
        dot.style.transform = 'scale(1.2)';
        setTimeout(() => {
            dot.style.transform = 'scale(1)';
        }, 200);
    }, 300);
    
    // Animation du contenu
    content.style.opacity = '0';
    content.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        content.style.transition = 'all 0.6s ease';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 200);
    
    // Animation des tags de matières
    const subjectTags = item.querySelectorAll('.subject-tag');
    subjectTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'scale(0.8)';
            tag.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'scale(1)';
            }, 50);
        }, 500 + (index * 100));
    });
}

// Animation des cartes de statistiques
function animateStatCard(card) {
    const statNumber = card.querySelector('.stat-content h3, h3');
    if (statNumber) {
        const finalValue = parseInt(statNumber.textContent);
        const hasPlus = statNumber.textContent.includes('+');
        
        animateCounter(statNumber, finalValue, hasPlus);
    }
}

// Animation de compteur
function animateCounter(element, target, hasPlus = false) {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
    }, 16);
}

// Animation des catégories de compétences
function animateSkillCategory(category) {
    const items = category.querySelectorAll('li');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100);
    });
}

// Animation spécifique aux compétences (pour la page skills)
function initSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const targetWidth = skillBar.getAttribute('data-width');
                
                setTimeout(() => {
                    skillBar.style.width = targetWidth;
                }, 500);
                
                skillObserver.unobserve(skillBar);
            }
        });
    });
    
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        skillObserver.observe(bar);
    });
}

// Animation des statistiques
function initStatsAnimation() {
    const statCards = document.querySelectorAll('.stat-card');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statCards.forEach((card, index) => {
                    setTimeout(() => {
                        animateStatCard(card);
                    }, index * 200);
                });
            }
        });
    });
    
    if (statCards.length > 0) {
        statsObserver.observe(statCards[0]);
    }
}

// Animation de la timeline
function initTimelineAnimation() {
    // Animation de la ligne de temps principale
    const timelineLine = document.querySelector('.timeline::before');
    const timeline = document.querySelector('.timeline');
    
    if (timeline) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('timeline-animated');
                }
            });
        });
        
        timelineObserver.observe(timeline);
    }
}

// Effet de parallaxe subtil pour les grandes sections
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.page-header');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.3;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Gestion du thème de couleur selon l'heure
function initDynamicTheme() {
    const hour = new Date().getHours();
    const body = document.body;
    
    // Thème légèrement différent selon l'heure
    if (hour >= 18 || hour <= 6) {
        body.classList.add('evening-mode');
    }
}

// Animation de typing pour certains textes
function initTypingEffect() {
    const typingElements = document.querySelectorAll('.typing-text');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        const speed = 100;
        let i = 0;
        
        element.textContent = '';
        element.style.borderRight = '2px solid var(--accent-color)';
        
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Animation du curseur
                setInterval(() => {
                    element.style.borderRight = element.style.borderRight === 'none' ? 
                        '2px solid var(--accent-color)' : 'none';
                }, 500);
            }
        }
        
        // Démarrer l'animation après un délai
        setTimeout(typeWriter, 1000);
    });
}

// Gestion des tooltips pour les compétences
function initTooltips() {
    const skillTags = document.querySelectorAll('.subject-tag, .tech-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = `Niveau: ${getSkillLevel(this.textContent)}`;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--dark-gray);
                color: var(--white);
                padding: 0.5rem 1rem;
                border-radius: 8px;
                font-size: 0.8rem;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 100);
            
            this.addEventListener('mouseleave', () => {
                tooltip.remove();
            });
            
            this.addEventListener('mousemove', (e) => {
                tooltip.style.left = e.pageX + 10 + 'px';
                tooltip.style.top = e.pageY - 40 + 'px';
            });
        });
    });
}

function getSkillLevel(skill) {
    const levels = {
        'JavaScript': 'Avancé',
        'Python': 'Avancé',
        'HTML5/CSS3': 'Expert',
        'React': 'Intermédiaire',
        'Node.js': 'Intermédiaire',
        'default': 'Intermédiaire'
    };
    
    return levels[skill] || levels.default;
}

// Lazy loading pour les images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialisation complète
function initializeAdvancedFeatures() {
    initParallaxEffect();
    initDynamicTheme();
    initTypingEffect();
    initTooltips();
    initLazyLoading();
}

// Lancer les fonctionnalités avancées après le chargement complet
window.addEventListener('load', initializeAdvancedFeatures);

// Gestion des erreurs JavaScript
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Performance: Débounce pour les événements de scroll
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

// Optimisation des événements de scroll
const optimizedScroll = debounce(() => {
    // Actions de scroll optimisées
}, 16);

window.addEventListener('scroll', optimizedScroll);

// CSS d'animation à ajouter dynamiquement
const pageAnimationCSS = `
.animate-in {
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.timeline-animated::before {
    animation: drawLine 2s ease forwards;
}

@keyframes drawLine {
    from {
        height: 0;
    }
    to {
        height: 100%;
    }
}

.evening-mode {
    filter: sepia(0.1) hue-rotate(10deg);
}

.lazy {
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip {
    animation: tooltipFadeIn 0.3s ease;
}

@keyframes tooltipFadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Ajouter les styles d'animation
const pageStyle = document.createElement('style');
pageStyle.textContent = pageAnimationCSS;
document.head.appendChild(pageStyle);
