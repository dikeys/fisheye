import { PhotographerCreate } from "../factories/PhotographerCreate";
import { Photographer } from "../factories/photographer";
function displayHiddenSortchoose() {
    const btnPopularity = document.getElementById("popularity");
    const menuSorts = btnPopularity.parentNode.children;
    btnPopularity.addEventListener("click", () => {
        const iconPopularity = document.querySelector(
            ".main-sort__select__icon"
        );
        iconPopularity.classList.toggle("main-sort__select__rotate");
        for (let menu of menuSorts) {
            menu.classList.toggle("display");
        }
    });
}

function sortByTitle(mediaOfPhotographer, photographerData) {
    const dateMenu = document.getElementById("titre");

    dateMenu.addEventListener("click", () => {
        let listMedia = mediaOfPhotographer.sort((a, b) => {
            return a.title > b.title;
        });
        const photographer = new Photographer(photographerData);
        let photographerCreate = new PhotographerCreate(photographer);
        let mediaContainer = document.querySelector(".photographer-media");
        mediaContainer.innerHTML = " ";
        photographerCreate.photographerMedia(listMedia, photographerData.name);
        photographerCreate.incrementlike();
    });
}

function sortByDate(mediaOfPhotographer, photographerData) {
    const dateMenu = document.getElementById("date");

    dateMenu.addEventListener("click", () => {
        let listMedia = mediaOfPhotographer.sort((a, b) => {
            return a.date > b.date;
        });
        const photographer = new Photographer(photographerData);
        let photographerCreate = new PhotographerCreate(photographer);
        let mediaContainer = document.querySelector(".photographer-media");
        mediaContainer.innerHTML = " ";
        photographerCreate.photographerMedia(listMedia, photographerData.name);
        photographerCreate.incrementlike();
    });
}
function sortByPopularity(mediaOfPhotographer, photographerData) {
    const dateMenu = document.getElementById("popularity");

    dateMenu.addEventListener("click", () => {
        let listMedia = mediaOfPhotographer.sort((a, b) => {
            return a.likes < b.likes;
        });
        const photographer = new Photographer(photographerData);
        let photographerCreate = new PhotographerCreate(photographer);
        let mediaContainer = document.querySelector(".photographer-media");
        mediaContainer.innerHTML = " ";
        photographerCreate.photographerMedia(listMedia, photographerData.name);
        photographerCreate.incrementlike();
    });
}

// function sort(photographerData, selector, listMedia) {
//     selector.addEventListener("click", () => {
//         let mediaContainer = document.querySelector(".photographer-media");

//         mediaContainer.innerHTML = "";
//         let photographer = new Photographer(photographerData);

//         let photographerCreate = new PhotographerCreate(photographer);

//         photographerCreate.photographerMedia(listMedia, photographer.name);
//     });
// }

// function sortByTitle(photographerData, mediaOfPhotographer) {
//     const selectorSortTitle = document.getElementById("titre");
//     let listMedia = mediaOfPhotographer.sort((a, b) => {
//         return a.title > b.title;
//     });
//     sort(photographerData, selectorSortTitle, listMedia);
// }

// function sortByDate(photographerData, mediaOfPhotographer) {
//     const selectorSort = document.getElementById("date");
//     let listMediaByDate = mediaOfPhotographer.sort((a, b) => {
//         return a.likes > b.likes;
//     });
//     sort(photographerData, selectorSort, listMediaByDate);
// }

export { displayHiddenSortchoose, sortByDate, sortByTitle, sortByPopularity };
