// toutes les categories

export async function afficherCat() {
  try {
    const res = await fetch("./data/categories.json");
    if (!res.ok)
      throw new Error(
        "Erreur lors du chargement des données sur categories.json"
      );

    const data = await res.json();
    const container = document.getElementById("catContainer");

    data.categories_principales.forEach((c) => {
      const card = document.createElement("div");
      card.className = `card categorie`;
      card.innerHTML = `
            <a href="#"><img src="${c.image}" alt="${c.nom}"/></a>
            `;

      container.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}


// Categories sur la page d'accueil

export async function afficherUsp() {
  try {
    const res = await fetch("./data/categories.json");
    if (!res.ok)
      throw new Error(
        "Erreur lors du chargement des données sur categories.json"
      );

    const data = await res.json();
    const container = document.getElementById("uspContainer");


    // --- Étape 1 : on mélange le tableau de catégories
    const categoriesMelangees = data.categories_principales
      .sort(() => Math.random() - 0.5);

    // --- Étape 2 : on en prend seulement 4
    const categoriesChoisies = categoriesMelangees.slice(0, 4);

    // --- Étape 3 : on affiche ces 4 éléments
    categoriesChoisies.forEach((c) => {
      const card = document.createElement("div");
      card.className = "card uspCategorie";
      card.innerHTML = `
        <img src="${c.image}" alt="${c.nom}" />
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.log(error);
  }
}