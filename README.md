# AI Prompt Library

## Description
AI Prompt Library est une application web statique qui affiche un prompt d'IA après avoir cliqué sur le bouton : "Générer".
Chaque prompt comprend un titre, une catégorie et un texte. Les utilisateurs peuvent également ajouter leurs propres prompts
directement dans le navigateur, sans recourir à une base de données : les prompts ajoutés sont uniquement stockés en mémoire.
Ce projet a été développé dans le cadre d'un parcours d'apprentissage DevOps, axé sur Git Flow, Docker et le CI/CD avec GitHub Actions.

## Installation et lancement

### Avec Docker
```bash
docker compose up
```
Accès sur http://localhost:3000

### Sans Docker
Ouvrir index.html avec Live Server

## Stack technique
- HTML / CSS / JavaScript
- Docker / nginx
- GitHub Actions (CI)

## CI/CD
La pipeline GitHub Actions se déclenche sur chaque push et pull request
sur main et develop. Elle vérifie que l'image Docker se build correctement.

## Structure du projet
```
project/
├── index.html
├── style.css
├── app.js
├── prompts.json
├── Dockerfile
├── docker-compose.yml
└── .github/workflows/ci.yml
```