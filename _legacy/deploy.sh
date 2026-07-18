#!/bin/bash

# 🚀 Script de Déploiement Automatique du Portfolio
# Usage: ./deploy.sh "Message de commit"

echo "🎨 ==============================================="
echo "🚀     DÉPLOIEMENT PORTFOLIO MODERNE"
echo "🎨 ==============================================="
echo ""

# Vérifier si on est dans le bon dossier
if [ ! -f "index.html" ]; then
    echo "❌ Erreur: Veuillez exécuter ce script depuis le dossier du portfolio"
    exit 1
fi

# Vérifier si Git est initialisé
if [ ! -d ".git" ]; then
    echo "📝 Initialisation de Git..."
    git init
    echo "✅ Git initialisé"
fi

# Ajouter tous les fichiers
echo "📦 Ajout des fichiers au staging..."
git add .

# Message de commit
if [ -z "$1" ]; then
    echo "💬 Entrez un message de commit:"
    read commit_message
else
    commit_message="$1"
fi

# Commit
echo "💾 Création du commit..."
git commit -m "$commit_message"

# Vérifier si l'origine est configurée
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "⚠️  Origine Git non configurée"
    echo "📝 Veuillez d'abord créer un dépôt sur GitHub, puis exécuter:"
    echo "    git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git"
    echo ""
    exit 1
fi

# Push vers GitHub
echo "🌐 Envoi vers GitHub..."
git push origin main

echo ""
echo "🎉 ==============================================="
echo "✅     DÉPLOIEMENT RÉUSSI !"
echo "🎉 ==============================================="
echo ""
echo "🌐 Votre portfolio sera bientôt disponible sur :"
echo "   https://VOTRE_USERNAME.github.io/VOTRE_REPO"
echo ""
echo "📊 Pour activer GitHub Pages :"
echo "   1. Allez sur votre dépôt GitHub"
echo "   2. Settings → Pages"
echo "   3. Source → Deploy from a branch"
echo "   4. Branch → main → Save"
echo ""
echo "🎓 Avec GitHub Education, vous pouvez aussi :"
echo "   • Obtenir un domaine gratuit (.me)"
echo "   • Utiliser GitHub Codespaces"
echo "   • Accéder à GitHub Copilot"
echo ""
