# Portfolio Professionnel Moderne

Un portfolio professionnel moderne et responsive avec une interface dynamique utilisant une palette de couleurs bleu ciel, blanc et vert chic.

## 🎨 Palette de Couleurs

- **Bleu Ciel Principal** : `#87CEEB`
- **Bleu Secondaire** : `#4A90E2` 
- **Vert Chic (Accent)** : `#20B2AA`
- **Vert Clair** : `#7FFFD4`
- **Blanc** : `#FFFFFF`

## 🚀 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fixe avec effets de scroll
- ✅ Animations CSS et JavaScript
- ✅ Barres de compétences animées
- ✅ Timeline pour l'éducation
- ✅ Grille de projets avec effets hover
- ✅ Formulaire de contact fonctionnel
- ✅ Optimisé pour mobile
- ✅ Effets de parallaxe subtils

## 📁 Structure du Projet

```
Portfolio/
├── index.html              # Page principale
├── styles/
│   └── main.css            # Styles CSS principaux
├── scripts/
│   └── main.js            # JavaScript interactif
├── .github/
│   └── copilot-instructions.md
└── README.md              # Documentation
```

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec Flexbox/Grid
- **JavaScript (ES6+)** - Interactivité et animations
- **Font Awesome** - Icônes
- **Google Fonts** - Police Poppins

## 📝 Personnalisation

### 1. Informations Personnelles

Modifiez les sections suivantes dans `index.html` :

- **Nom et titre** : Ligne 31-34
- **Description** : Ligne 35-39
- **Photo** : Remplacez la div `.image-placeholder` par votre photo
- **Contact** : Section contact (lignes 300+)

### 2. Éducation

La section éducation est déjà configurée avec vos diplômes :
- Licence Professionnelle en Mathématiques-Informatique (ENS Natitingou)
- Licence en TIC (IMSP)
- Baccalauréat Série C
- BEPC Série MC

### 3. Compétences

Modifiez les pourcentages des barres de compétences dans la section `#competences`.

### 4. Projets

Remplacez les projets d'exemple par vos vrais projets :
- Modifiez les titres, descriptions et technologies
- Ajoutez les liens vers vos projets GitHub/démo

### 5. Expérience

Ajoutez vos vraies expériences professionnelles dans la section `#experience`.

## 🌐 Hébergement avec GitHub Education

### Avantages de GitHub Education

Avec **GitHub Education**, vous avez accès à :
- ✅ **GitHub Pages** (gratuit)
- ✅ Domaine personnalisé gratuit
- ✅ Actions GitHub illimitées
- ✅ Espaces Codespaces
- ✅ GitHub Copilot

### Déploiement sur GitHub Pages

#### Étape 1 : Créer le Repository
```bash
# Initialiser Git dans votre dossier
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial portfolio commit"

# Ajouter le remote (remplacez USERNAME par Rachidi Adébissi IDONIYI d'utilisateur)
git remote add origin https://github.com/USERNAME/portfolio.git

# Pousser vers GitHub
git push -u origin main
```

#### Étape 2 : Activer GitHub Pages
1. Allez dans **Settings** de votre repository
2. Scrollez jusqu'à **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main** / folder : **/ (root)**
5. Cliquez **Save**

#### Étape 3 : Accéder à votre site
Votre portfolio sera disponible à : `https://USERNAME.github.io/portfolio`

### Options d'Hébergement Alternatives (Gratuites)

1. **Netlify** - Déploiement automatique depuis GitHub
2. **Vercel** - Optimisé pour les projets frontend
3. **GitHub Codespaces** - Environnement de développement cloud
4. **Firebase Hosting** - Google Cloud Platform

## 🎯 Domaine Personnalisé (GitHub Education)

Avec GitHub Education, vous pouvez obtenir un domaine gratuit :

1. **Namecheap** - Domaine .me gratuit pendant 1 an
2. **Techdomains** - Domaine .tech gratuit
3. Configurez le domaine dans GitHub Pages

## 📱 Tests et Optimisation

### Tests Recommandés
- **Responsive Design** : Testez sur différentes tailles d'écran
- **Performance** : Utilisez Google PageSpeed Insights
- **Accessibilité** : Vérifiez avec axe DevTools
- **Cross-browser** : Testez sur Chrome, Firefox, Safari

### Optimisations
- Compressez les images avant de les ajouter
- Minimisez le CSS/JS pour la production
- Utilisez un CDN pour les ressources externes

## 🚀 Prochaines Étapes

1. **Ajoutez vos vraies informations**
2. **Créez et ajoutez vos projets réels**
3. **Optimisez les images**
4. **Configurez le formulaire de contact** (EmailJS, Formspree)
5. **Ajoutez Google Analytics** (optionnel)
6. **Configurez un domaine personnalisé**

## 📧 Intégration du Formulaire de Contact

### Option 1 : EmailJS (Recommandé)
```javascript
// Ajoutez dans main.js après avoir créé un compte EmailJS
emailjs.send("service_id", "template_id", data)
  .then(() => showNotification('Message envoyé !', 'success'))
  .catch(() => showNotification('Erreur d\'envoi', 'error'));
```

### Option 2 : Formspree
```html
<!-- Modifiez la balise form -->
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🎨 Customisation Avancée

### Ajouter un Mode Sombre
```css
[data-theme="dark"] {
  --primary-color: #1a365d;
  --white: #1a202c;
  --dark-gray: #ffffff;
}
```

### Animations Personnalisées
Modifiez les animations CSS dans `main.css` ou ajoutez de nouvelles animations JavaScript.

## 📞 Support

Si vous avez des questions sur la personnalisation ou le déploiement, n'hésitez pas à demander de l'aide !

---

**Bonne chance avec votre portfolio ! 🚀**
