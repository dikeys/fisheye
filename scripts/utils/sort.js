import { PhotographerFactories } from "../factories/PhotographerFactories";
import { Photographer } from "../factories/photographer";
import { Lightbox } from "../utils/lightbox";
function displayHiddenSortchoose() {
    const btnPopularity = document.getElementById("icon");
    const menuSorts = document.querySelectorAll(".main-sort__select__option");
    btnPopularity.addEventListener("click", (e) => {
        // e.stopPropagation()
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
    const titreMenu = document.getElementById("titre");

    titreMenu.addEventListener("click", () => {
        let listMedia = mediaOfPhotographer.sort((a, b) => {
            return a.title > b.title;
        });
        const photographer = new Photographer(photographerData);
        let photographerCreate = new PhotographerFactories(photographer);
        let mediaContainer = document.querySelector(".photographer-media");
        mediaContainer.innerHTML = " ";
        photographerCreate.photographerMedia(listMedia, photographerData.name);
        photographerCreate.incrementlike();
        const linksImg = document.querySelectorAll(".photographer-media__img");

        const lightbox = new Lightbox(linksImg);
        lightbox.displayImage();
        // const btnnext = document.getElementById("btnnext");
        const btnPrev = document.getElementById("btnPrev");
        lightbox.next(btnnext);

        lightbox.prev(btnPrev);
        lightbox.keyDown()
    });
}

function sortByDate(mediaOfPhotographer, photographerData) {
    const dateMenu = document.getElementById("date");

    dateMenu.addEventListener("click", () => {
        let listMedia = mediaOfPhotographer.sort((a, b) => {
            return a.date > b.date;
        });
        const photographer = new Photographer(photographerData);
        let photographerCreate = new PhotographerFactories(photographer);
        let mediaContainer = document.querySelector(".photographer-media");
        mediaContainer.innerHTML = " ";
        photographerCreate.photographerMedia(listMedia, photographerData.name);
        photographerCreate.incrementlike();
        const linksImg = document.querySelectorAll(".photographer-media__img");

        const lightbox = new Lightbox(linksImg);
        lightbox.displayImage();
        // const btnnext = document.getElementById("btnnext");
        const btnPrev = document.getElementById("btnPrev");
        lightbox.next(btnnext);

        lightbox.prev(btnPrev);
        lightbox.keyDown()
    });
}
function sortByPopularity(mediaOfPhotographer, photographerData) {
    const popularityMenu = document.getElementById("popularity");

    popularityMenu.addEventListener("click", (e) => {
      
        let listMedia = mediaOfPhotographer.sort((a, b) => {
            return a.likes < b.likes;
        });
        const photographer = new Photographer(photographerData);
        let photographerCreate = new PhotographerFactories(photographer);
        let mediaContainer = document.querySelector(".photographer-media");
        mediaContainer.innerHTML = " ";
        photographerCreate.photographerMedia(listMedia, photographerData.name);
        photographerCreate.incrementlike();
        const linksImg = document.querySelectorAll(".photographer-media__img");

        const lightbox = new Lightbox(linksImg);
        lightbox.displayImage();
        // const btnnext = document.getElementById("btnnext");
        const btnPrev = document.getElementById("btnPrev");
        lightbox.next(btnnext);

        lightbox.prev(btnPrev);
        lightbox.keyDown()
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
