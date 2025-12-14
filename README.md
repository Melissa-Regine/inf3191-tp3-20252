# inf3191-tp3-20252

## Auteurs

Nom : Wendlassida Melissa Regine Amina Nikiema
Code permanent : NIKW72350304

Nom : Amavi Esther Lodonou
Code permanent : LODA72340508

## Description du projet

Ce projet est une application web développée dans le cadre du TP3 du cours INF3191.
Elle permet :

d’ajouter un animal à une base de données,

de rechercher des animaux disponibles à l’adoption,

d’afficher automatiquement 5 animaux choisis au hasard,

d’accéder à la fiche détaillée de chaque animal.

Le serveur utilise Flask (Python) et une base de données SQLite.

## Technologies utilisées

Python 3.10+
Flask
SQLite 3
HTML / CSS / JavaScript

## Installation du logiciel

Suivre ces étapes exactement pour exécuter le projet :

  # Installer les dépendances

Le projet utilise Flask. Installer avec :
`pip install flask`

  # Initialiser la base de données

Le dossier `db/` contient déjà :

animaux.db

animaux.sql (version texte)

Aucune étape supplémentaire n’est nécessaire :
la base SQLite est prête à être utilisée.

Lancer le serveur
`python index.py`

Vous verrez :
Running on `http://127.0.0.1:5000/`

  # Ouvrir l’application dans votre navigateur

Aller à :

`http://127.0.0.1:5000/`

Vous pouvez maintenant :
consulter les animaux disponibles,
faire une recherche,
ajouter un animal via le formulaire,
consulter la fiche d’un animal.

## Fonctionnalités principales
  # Recherche d’animaux

Recherche par nom, espèce, race ou description.

Affichage des résultats sous forme de cartes.

  # Mettre un animal en adoption

Validation complète côté client (JavaScript).

Enregistrement en base SQLite.

  # Fiche d’un animal

Affiche description + adresse + possibilité de contacter le propriétaire via un courriel.

  # Interface moderne et responsive

CSS personnalisé (sans framework).
Mise en page professionnelle.