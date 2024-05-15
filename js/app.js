/******************
* Menu hamburger *
*****************/

const btnNavShow = document.querySelector("#nav-show");
const btnNavHide = document.querySelector("#nav-hide");


btnNavShow.addEventListener("click", afficherNavigation);
btnNavHide.addEventListener("click", cacherNavigation);


function afficherNavigation() {

    
    const navMenu = document.querySelector(btnNavShow.dataset.target);

    
    navMenu.classList.remove("hide");

    
    btnNavShow.classList.add("hide");

    
    btnNavHide.classList.remove("hide");
}

function cacherNavigation() {

    
    const navMenu = document.querySelector(btnNavHide.dataset.target);

    
    navMenu.classList.add("hide");

    
    btnNavShow.classList.remove("hide")

    
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


const navMenu = document.querySelector('.collapse');
const containerIcon = document.querySelector('.container-icon');


window.addEventListener('resize', manageIconContainer);


function manageIconContainer() {
    if (window.innerWidth <= 833) { 
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

manageIconContainer();