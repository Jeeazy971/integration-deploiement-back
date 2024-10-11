
---

# Integration Deployment Back

## Description

Ce projet consiste en une API Node.js qui intègre plusieurs outils de CI/CD, y compris des tests automatisés avec Jest et une génération de documentation avec JSDoc. Le projet utilise également GitHub Actions pour l'intégration continue (CI) et le déploiement continu (CD).

## Fonctionnalités

- Calcul de l'âge d'une personne à partir de sa date de naissance.
- Tests unitaires avec Jest.
- Génération automatique de la couverture de code.
- Génération de la documentation de code avec JSDoc.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/) (v20.x ou plus récent)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [Codecov](https://about.codecov.io/) (pour le rapport de couverture)

## Installation

Clonez le dépôt depuis GitHub :

```bash
git clone https://github.com/Jeeazy971/integration-deploiement-back.git
cd integration-deploiement-back
```

Installez les dépendances du projet :

```bash
npm install
```

## Scripts npm

Voici les principaux scripts npm disponibles dans ce projet :

- `npm test`: Exécute les tests unitaires avec Jest et génère la couverture de code.
- `npm run jsdoc`: Génère la documentation JSDoc dans le répertoire `docs`.

## Exécution des tests

Pour exécuter les tests unitaires et générer un rapport de couverture :

```bash
npm test
```

Cela créera un rapport de couverture de code dans le répertoire `coverage`.

## Génération de la documentation

Pour générer la documentation de votre projet avec JSDoc, utilisez la commande suivante :

```bash
npm run jsdoc
```

La documentation sera générée dans le répertoire `docs`.

## Déploiement de la documentation JSDoc

Si vous souhaitez déployer la documentation générée sur GitHub Pages, suivez les étapes ci-dessous :

1. Ajoutez les fichiers générés dans le répertoire `docs` au contrôle de version :

```bash
git add docs
git commit -m "Ajout de la documentation JSDoc"
```

2. Poussez les changements vers GitHub. Assurez-vous que la branche `main` est configurée pour déployer les fichiers de documentation depuis le répertoire `/docs` dans les paramètres du dépôt GitHub.

## Utilisation de GitHub Actions

Ce projet utilise un pipeline CI/CD via GitHub Actions pour :

1. Exécuter les tests avec Jest.
2. Générer et télécharger la couverture de code avec Codecov.
3. Générer la documentation de code avec JSDoc.

Le pipeline est défini dans le fichier `.github/workflows/test_nodejs_pipeline.yml`.

## Fichiers de configuration

- **`.gitignore`** : Définit les fichiers et dossiers à ignorer par Git.
- **`package.json`** : Contient les scripts npm, les dépendances du projet, et d'autres métadonnées.
- **`jest.config.js`** : Configuration pour Jest, utilisé pour exécuter les tests unitaires.
- **`jsdoc.config.json`** : Configuration pour JSDoc, utilisée pour générer la documentation.
- **`Dockerfile`** : Définit l'environnement Docker pour exécuter l'application.

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous pour contribuer :

1. Forkez ce dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`).
3. Faites vos changements et testez-les.
4. Effectuez un commit (`git commit -m 'Ajout d'une fonctionnalité'`).
5. Poussez vos changements (`git push origin feature/ma-fonctionnalité`).
6. Ouvrez une Pull Request.

## Auteurs

- **Josué BAYIDIKILA** - Auteur principal.

## Licence

Ce projet est sous aucune licence.

---
