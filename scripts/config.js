// Configuration des liens adaptatifs pour Portfolio
class PortfolioConfig {
    constructor() {
        this.isLocal = this.detectEnvironment();
        this.baseUrl = this.getBaseUrl();
        this.socialLinks = {
            linkedin: 'https://www.linkedin.com/in/rachid-idoniyi-02b606268/',
            github: 'https://github.com/rachidiID/',
            twitter: 'https://twitter.com/rachidi_idoniyi' // Remplacez par votre vraie URL Twitter
        };
        this.cvPath = 'docs/Cv_Rach.pdf';
        this.profileImagePath = 'image/Sout1.jpeg';
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
            return 'https://rachidiid.github.io/Portfolio';
        }
    }

    getAssetUrl(path) {
        if (path.startsWith('http')) {
            return path;
        }
        
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `${this.baseUrl}/${cleanPath}`.replace(/\/+/g, '/').replace(':/', '://');
    }

    updatePageLinks() {
        console.log('🔄 Mise à jour des liens...', this.baseUrl);
        this.updateCvLinks();
        this.updateSocialLinks();
        this.updateImages();
    }
    
    updateCvLinks() {
        const cvLinks = document.querySelectorAll('a[href*="Cv_Rach"], a[download*="CV"], a[href*="docs/"]');
        cvLinks.forEach(link => {
            const newUrl = this.getAssetUrl(this.cvPath);
            link.href = newUrl;
            link.download = 'CV_Rachidi_Idoniyi.pdf';
            link.target = '_blank';
            
            // Forcer le téléchargement au lieu de la navigation
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const downloadLink = document.createElement('a');
                downloadLink.href = newUrl;
                downloadLink.download = 'CV_Rachidi_Idoniyi.pdf';
                downloadLink.style.display = 'none';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            });
            
            console.log('📄 Lien CV mis à jour:', newUrl);
        });
    }
    
    updateSocialLinks() {
        // LinkedIn
        const linkedinLinks = document.querySelectorAll('a[href*="linkedin"], a i.fa-linkedin');
        linkedinLinks.forEach(element => {
            const link = element.tagName === 'A' ? element : element.closest('a');
            if (link) {
                link.href = this.socialLinks.linkedin;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
        
        // GitHub  
        const githubLinks = document.querySelectorAll('a[href*="github"], a i.fa-github');
        githubLinks.forEach(element => {
            const link = element.tagName === 'A' ? element : element.closest('a');
            if (link) {
                link.href = this.socialLinks.github;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
        
        // Twitter
        const twitterLinks = document.querySelectorAll('a[href*="twitter"], a i.fa-twitter');
        twitterLinks.forEach(element => {
            const link = element.tagName === 'A' ? element : element.closest('a');
            if (link) {
                link.href = this.socialLinks.twitter;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
        
        console.log('🔗 Liens sociaux mis à jour');
    }
    
    updateImages() {
        const profileImages = document.querySelectorAll('img[src*="Sout1"], img[alt*="Rachidi"], .profile-photo');
        profileImages.forEach(img => {
            const newSrc = this.getAssetUrl(this.profileImagePath);
            img.src = newSrc;
            img.alt = 'Rachidi Adébissi IDONIYI';
            
            img.onerror = function() {
                console.warn('❌ Image non trouvée:', newSrc);
                img.style.display = 'none';
                
                const placeholder = document.createElement('div');
                placeholder.className = 'image-fallback';
                placeholder.innerHTML = '<i class="fas fa-user" style="font-size: 4rem; color: var(--secondary-color);"></i><p>Photo à venir</p>';
                placeholder.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    background: var(--light-gray);
                    border-radius: 50%;
                    color: var(--secondary-color);
                `;
                img.parentElement.appendChild(placeholder);
            };
            
            img.onload = function() {
                console.log('✅ Image chargée:', newSrc);
            };
            
            console.log('🖼️ Image mise à jour:', newSrc);
        });
    }
}

// Initialisation automatique
const portfolioConfig = new PortfolioConfig();

// Mise à jour des liens quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        portfolioConfig.updatePageLinks();
    });
} else {
    portfolioConfig.updatePageLinks();
}

// Export pour utilisation dans d'autres scripts
window.PortfolioConfig = PortfolioConfig;
window.portfolioConfig = portfolioConfig;
