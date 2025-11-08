// NAV BAR
import {navContainer} from "./nav.js";





// CARD CATEGORIES 
import {afficherCat} from "./categories.js";

afficherCat();

// categories sur page d'accueil

import {afficherUsp} from "./categories.js";

afficherUsp();


// On importe la fonction initDisplay depuis le module display.js
import { initDisplay } from './display.js';

// On sélectionne l'élément HTML où les articles seront affichés
const container = document.getElementById("articlesContainer");

// On sélectionne un autre élément HTML, probablement pour afficher un message "Aucun article trouvé"
const autre = document.getElementById("autre");

// On sélectionne l'input pour filtrer les articles
const filterInput = document.getElementById("filterInput");


// Variable qui contiendra le tableau des articles chargés depuis le JSON
let articles = [];

// Fonction asynchrone pour récupérer les articles depuis le fichier JSON
async function afficherArticles() {
  try {
    // On fait une requête fetch pour récupérer le fichier articles.json
    const res = await fetch("./data/articles.json");

    // Si la requête échoue (status non OK), on lève une erreur
    if (!res.ok) throw new Error("Erreur lors du chargement du JSON");

    // On récupère les données JSON
    const data = await res.json();

    // On stocke le tableau d'articles dans la variable articles
    articles = data.articles;

    // On initialise l'affichage avec le module display
    // On passe les articles, le container, l'input de filtre, le bouton de tri et l'élément pour messages
    initDisplay(articles, container, filterInput);

  } catch (error) {
    // En cas d'erreur (fetch ou JSON), on l'affiche dans la console
    console.error(error);
  }
}

// On appelle la fonction pour lancer le chargement et l'affichage des articles
afficherArticles();




// scroll horizontal 
const catContainer = document.getElementById("catContainer");

catContainer.addEventListener("wheel", (evt) => {
  if (evt.deltaY !== 0) {
    evt.preventDefault();
    catContainer.scrollLeft += evt.deltaY; // redirige le scroll vertical
  }
});

