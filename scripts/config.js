// Configuration des liens adaptatifs
class PortfolioConfig {
    constructor() {
        this.isLocal = this.detectEnvironment();
        this.baseUrl = this.getBaseUrl();
        this.socialLinks = {
            linkedin: 'https://linkedin.com/in/rachidi-idoniyi',
            github: 'https://github.com/rachidiID',
            twitter: 'https://twitter.com/rachidi_idoniyi'
        };
    }

    detectEnvironment() {
        return window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1' || 
               window.location.hostname === '';
    }

    getBaseUrl() {
        if (this.isLocal) {
            return window.location.origin;
        } else {
            // Pour GitHub Pages ou production
            return 'https://rachidiid.github.io/Portfolio';
        }
    }

    getAssetUrl(path) {
        // Retourne l'URL complète pour un asset (image, document, etc.)
        if (path.startsWith('http')) {
            return path; // URL absolue déjà
        }
        
        if (this.isLocal) {
            return `${window.location.origin}/${path}`;
        } else {
            return `${this.baseUrl}/${path}`;
        }
    }

    getSocialLink(platform) {
        return this.socialLinks[platform] || '#';
    }

    // Méthode pour mettre à jour tous les liens sur une page
    updatePageLinks() {
        // Mettre à jour les liens de documents
        const documentLinks = document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"]');
        documentLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href.startsWith('http')) {
                link.href = this.getAssetUrl(href);
            }
        });

        // Mettre à jour les images
        const images = document.querySelectorAll('img[src]');
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (!src.startsWith('http') && !src.startsWith('data:')) {
                img.src = this.getAssetUrl(src);
            }
        });

        // Mettre à jour les liens sociaux avec de vrais liens
        this.updateSocialLinks();
    }

    updateSocialLinks() {
        // Mettre à jour les liens LinkedIn
        const linkedinLinks = document.querySelectorAll('a[href*="linkedin"], a[href="#"]:has(.fab.fa-linkedin)');
        linkedinLinks.forEach(link => {
            if (link.querySelector('.fab.fa-linkedin')) {
                link.href = this.getSocialLink('linkedin');
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });

        // Mettre à jour les liens GitHub
        const githubLinks = document.querySelectorAll('a[href*="github"], a[href="#"]:has(.fab.fa-github)');
        githubLinks.forEach(link => {
            if (link.querySelector('.fab.fa-github')) {
                link.href = this.getSocialLink('github');
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });

        // Mettre à jour les liens Twitter
        const twitterLinks = document.querySelectorAll('a[href*="twitter"], a[href="#"]:has(.fab.fa-twitter)');
        twitterLinks.forEach(link => {
            if (link.querySelector('.fab.fa-twitter')) {
                link.href = this.getSocialLink('twitter');
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
    }
}

// Initialiser la configuration
const portfolioConfig = new PortfolioConfig();

// Mettre à jour les liens quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    portfolioConfig.updatePageLinks();
    
    // Log pour debug
    console.log('Portfolio Config:', {
        isLocal: portfolioConfig.isLocal,
        baseUrl: portfolioConfig.baseUrl,
        environment: portfolioConfig.isLocal ? 'Local' : 'Production'
    });
});

// Exporter pour utilisation dans d'autres scripts
window.PortfolioConfig = PortfolioConfig;
window.portfolioConfig = portfolioConfig;
