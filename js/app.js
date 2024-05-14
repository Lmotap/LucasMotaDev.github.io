/******************
* Menu hamburger *
*****************/
// Récupération des "boutons" responsives

const btnNavShow = document.querySelector("#nav-show");
const btnNavHide = document.querySelector("#nav-hide");


btnNavShow.addEventListener("click", afficherNavigation);
btnNavHide.addEventListener("click", cacherNavigation);


function afficherNavigation() {

    // Element à manipuler
    const navMenu = document.querySelector(btnNavShow.dataset.target);

    // Retirer la classe .hide de la liste des classes de l'élément
    navMenu.classList.remove("hide");

    // Cacher l'icône hamburger
    btnNavShow.classList.add("hide");

    // Et afficher l'icône "croix de fermeture"
    btnNavHide.classList.remove("hide");
}

function cacherNavigation() {

    // Element à manipuler
    const navMenu = document.querySelector(btnNavHide.dataset.target);

    // Ajouter la classe .hide à la liste des classes de l'élément
    navMenu.classList.add("hide");

    // Afficher l'icône hamburger
    btnNavShow.classList.remove("hide")

    // Et cacher l'icône "croix de fermeture"
    btnNavHide.classList.add("hide");

}



/* Menu déroulants * 
*******************/

const collapsableMenuItems = document.querySelectorAll(".collapsable-item");

collapsableMenuItems.forEach(element => {
    element.addEventListener("click", manageCollapsableMenuItem);
});

function manageCollapsableMenuItem(event) {
    let collapsable = document.querySelector(event.target.dataset.target);
    
    if (collapsable.classList.contains("hide")) {
        collapsable.classList.remove("hide");
    } else {
    collapsable.classList.add("hide");
    
    }
}

// Récupération des éléments
const navMenu = document.querySelector('.collapse');
const containerIcon = document.querySelector('.container-icon');

// Ajout d'un écouteur d'événement pour le redimensionnement de la fenêtre
window.addEventListener('resize', manageIconContainer);

// Fonction pour gérer le placement du container-icon
function manageIconContainer() {
    if (window.innerWidth <= 833) { // Taille d'écran pour le responsive
        if (!navMenu.contains(containerIcon)) {
            navMenu.appendChild(containerIcon);
        }
    } else {
        if (navMenu.contains(containerIcon)) {
            navMenu.removeChild(containerIcon);
            // Ajoutez le container-icon à l'endroit où vous voulez qu'il apparaisse sur le bureau
            document.querySelector('header').appendChild(containerIcon);
        }
    }
}

// Appel initial de la fonction pour gérer le placement initial du container-icon
manageIconContainer();