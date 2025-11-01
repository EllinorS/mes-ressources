// NAV BAR
import {navContainer} from "./nav.js";


// CARTES USP PAGE ACCUEIL
import { uspCards } from "./data.js";

document.addEventListener('DOMContentLoaded' , () =>{
    const container = document.getElementById('container-usp')

    if (container) {
        uspCards.forEach (uspCard => {
            const card = document.createElement('div')

            card.classList.add('usp-card')

            card.innerHTML = `
            <img src="${uspCard.image}" alt=${uspCard.titre}/>
            `
            container.append(card)
        })
    }

})

