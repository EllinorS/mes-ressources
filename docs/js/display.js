// display.js

// On importe la fonction filterArticles depuis le module filter.js
import { filterArticles } from "../js/filter.js";

// On exporte une fonction initDisplay qui initialise l'affichage des articles
// Elle prend en paramètre :
// - articles : le tableau des articles
// - container : l'élément HTML où afficher les articles
// - filterInput : l'input HTML pour filtrer les articles
// - sortBtn : le bouton HTML pour trier les articles
export function initDisplay(articles, container, filterInput) {
  // Fonction interne pour générer les cartes des articles dans le container
  function renderArticles(list) {
    // On vide le container avant d'ajouter les nouvelles cartes
    container.innerHTML = "";

    // On parcourt chaque article du tableau list
    list.forEach((a) => {
      // On crée un élément div pour représenter une carte
      const card = document.createElement("div");

      // On lui ajoute la classe "card" pour le style CSS
      card.className = "cardArticle";

      card.style.backgroundImage = `url('${a.image}')`;
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
      // On remplit la carte avec le titre et la date de l'article
      // new Date(a.date).toLocaleString() convertit la date ISO en format lisible
      card.innerHTML = `
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <br>
        <a href="#"> lire la suite </a>
      `;

      // On ajoute la carte dans le container HTML
      container.appendChild(card);
    });
  }

  // Fonction pour mettre à jour l'affichage en appliquant filtre et tri
  function updateDisplay() {
    // On applique le filtre sur tous les articles en fonction de l'input
    let displayed = filterArticles(articles, filterInput.value);

    // si l'input est vide, ne montrer que les 3 derniers articles
if (!filterInput.value) {
    displayed = displayed
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // tri décroissant par date
      .slice(0, 3); // prend les 3 premiers après tri
  }


    // On génère les cartes dans le container avec les articles filtrés et triés
    renderArticles(displayed);
  }

  // Événements pour mettre à jour l'affichage

  // Quand l'utilisateur tape dans l'input, on met à jour l'affichage
  filterInput.addEventListener("input", updateDisplay);

  // Affichage initial des articles dès le chargement
  updateDisplay();
}
