"use strict";

// Fonction pour basculer la classe active d'un élément
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Variables de la barre latérale
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Fonctionnalité de bascule de la barre latérale pour mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Variables de la sélection personnalisée
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Ouverture et fermeture de la liste déroulante
select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Ajout d'un événement à chaque élément de la liste déroulante
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Variables des éléments à filtrer
const filterItems = document.querySelectorAll("[data-filter-item]");

// Fonction de filtrage des éléments
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Ajout d'événements à tous les boutons de filtre pour les grands écrans
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Variables du formulaire de contact
const contactForm = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Ajout d'un événement sur chaque champ de saisie du formulaire
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Vérification de la validation du formulaire
    if (contactForm.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Variables de navigation de la page
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Ajout d'événements à chaque lien de navigation
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Variables pour la gestion de la modale
const modal = document.getElementById("projectModal");
const modalCloseBtn = document.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

// Récupération de tous les éléments d'icônes de projet
const iconBoxes = document.querySelectorAll(".project-item-icon-box");

// Ajout d'événements à chaque icône de projet pour afficher la modale
iconBoxes.forEach((iconBox, index) => {
  iconBox.addEventListener("click", function () {
    const projectTitles = document.querySelectorAll(".project-title");
    const projectDescriptions = [
      "Création de la page d'accueil d'une agence de voyage avec une interface responsive utilisant HTML5 et CSS3. Intégration de maquettes Figma et développement de composants personnalisés pour une expérience utilisateur optimale.",
      "Objectifs d'apprentissage : conception mobile-first, implémentation d'animations CSS, utilisation de Sass pour un code maintenable, et versionnement avec Git et GitHub.",
      "Développement d'une page web dynamique pour un site d'architecte d'intérieur avec JavaScript. Interaction avec une API, création de pages dynamiques et utilisation d'outils comme Figma et Visual Studio Code.",
      "Implémentation du front-end d'une application avec React et React Router. Développement de composants, gestion de la navigation et utilisation de données simulées à partir d'un fichier JSON.",
      "Optimisation du référencement d'un site web en améliorant sa performance et son accessibilité. Analyse des problèmes, mise en œuvre d'améliorations et création d'un rapport détaillant les résultats avant/après.",
      "Débuggage et finalisation d'un site one-page. Analyse du code, résolution de bugs avec les Chrome DevTools et React Developer Tools, documentation des tests, et gestion de projet avec Yarn.",
      "Développement du front-end d'une application bancaire avec React et Redux. Intégration des appels API, création d'une interface utilisateur responsive et gestion de l'état global avec Redux.",
      "Développement du projet **Menu Maker - Qwenta**, un outil en ligne pour la création et la personnalisation de menus par les restaurateurs.",
    ];

    modalTitle.textContent = projectTitles[index].textContent;
    modalDescription.textContent = projectDescriptions[index];

    modal.style.display = "block"; // Ouvre la modale
  });
});

// Fermeture de la modale lorsque le bouton de fermeture est cliqué
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Ferme la modale
});

// Fermeture de la modale si l'utilisateur clique à l'extérieur
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Ferme la modale
  }
});
