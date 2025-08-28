#!/bin/bash

# Script pour mettre à jour les liens sociaux dans toutes les pages

echo "🔄 Mise à jour des liens sociaux dans toutes les pages..."

# Définir les liens sociaux
LINKEDIN_URL="https://linkedin.com/in/rachidi-idoniyi"
GITHUB_URL="https://github.com/rachidiID"
TWITTER_URL="https://twitter.com/rachidi_idoniyi"

# Fonction pour remplacer les liens sociaux dans un fichier
update_social_links() {
    local file="$1"
    echo "📝 Mise à jour de $file"
    
    # Remplacer les liens LinkedIn
    sed -i 's|<a href="#"[^>]*><i class="fab fa-linkedin"></i></a>|<a href="'$LINKEDIN_URL'" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a>|g' "$file"
    
    # Remplacer les liens GitHub  
    sed -i 's|<a href="#"[^>]*><i class="fab fa-github"></i></a>|<a href="'$GITHUB_URL'" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>|g' "$file"
    
    # Remplacer les liens Twitter
    sed -i 's|<a href="#"[^>]*><i class="fab fa-twitter"></i></a>|<a href="'$TWITTER_URL'" target="_blank" rel="noopener"><i class="fab fa-twitter"></i></a>|g' "$file"
}

# Mettre à jour toutes les pages HTML
for file in pages/*.html; do
    if [ -f "$file" ]; then
        update_social_links "$file"
    fi
done

echo "✅ Tous les liens sociaux ont été mis à jour!"
echo ""
echo "🔗 Liens configurés:"
echo "   LinkedIn: $LINKEDIN_URL"  
echo "   GitHub: $GITHUB_URL"
echo "   Twitter: $TWITTER_URL"
