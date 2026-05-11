#!/bin/bash

# ==========================================
# Script de déploiement Astro (Site Statique)
# ==========================================

set -e  # Arrêter le script en cas d'erreur

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration ytCEoyKJE5gO7NOm3gPb
SSH_USER="novaclinic" 
SSH_HOST="83.228.225.79"
REMOTE_PATH="/home/novaclinic/htdocs/novaclinic.ch"
BUILD_DIR="dist"
APP_URL="https://novaclinic.ch"

# Fonction pour afficher les messages
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Générer un numéro de version basé sur le timestamp
VERSION=$(date +%s)
log_info "Version de build: $VERSION"

# Afficher la version de Node et NPM
log_info "Version de Node.js:"
node --version

# Étape 1: Nettoyage
log_info "Nettoyage de l'ancien dossier de build..."
if [ -d "$BUILD_DIR" ]; then
    rm -rf "$BUILD_DIR"
fi

# Étape 2: Récupération des dépendances
log_info "Installation des dépendances (npm install)..."
npm install

# Étape 3: Build de l'application
# Astro n'a pas de concept de service worker par défaut de la même manière que Flutter Web,
# et la gestion du cache (cache busting) est automatique pour les assets dans Astro.
log_info "Build de l'application Astro..."
npm run build

if [ $? -eq 0 ]; then
    log_success "Build réussi!"
else
    log_error "Le build a échoué"
    exit 1
fi

# Vérifier que le dossier build existe
if [ ! -d "$BUILD_DIR" ]; then
    log_error "Le dossier $BUILD_DIR n'existe pas"
    exit 1
fi

# Étape 4: Transfert des fichiers
log_info "Transfert des fichiers vers le serveur ($SSH_HOST)..."
cd "$BUILD_DIR"
scp -r * "$SSH_USER@$SSH_HOST:$REMOTE_PATH"

if [ $? -eq 0 ]; then
    log_success "Transfert réussi!"
else
    log_error "Le transfert a échoué"
    exit 1
fi

# Retour au répertoire racine du projet
cd ..

# Résumé
echo ""
log_success "======================================"
log_success "  Déploiement terminé avec succès!"
log_success "======================================"
echo ""
log_info "URL: $APP_URL"
log_info "Version: $VERSION"
log_info "Temps de déploiement: $SECONDS secondes"
echo ""
log_warning "Note: Astro gère automatiquement le cache busting (hashing) de ses assets (_astro/)."
echo ""

# Optionnel: Ouvrir le site dans le navigateur
read -p "Voulez-vous ouvrir le site dans le navigateur? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v xdg-open &> /dev/null; then
        xdg-open "$APP_URL"
    elif command -v open &> /dev/null; then
        open "$APP_URL"
    else
        log_warning "Impossible d'ouvrir le navigateur automatiquement"
    fi
fi
