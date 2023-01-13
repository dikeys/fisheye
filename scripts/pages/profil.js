import { PhotographerApi } from "../Api/PhotographerApi";
import { LightboxFactories } from "../factories/LightboxFactories";
import { Photographer } from "../factories/photographer";
import { PhotographerFactories } from "../factories/PhotographerFactories";
import * as form from "../utils/form";
import { Lightbox } from "../utils/lightbox";
import { Modal } from "../utils/Modal";
import * as sort from "../utils/sort";

async function init() {
    let urlSearch = new URLSearchParams(document.location.search);

    const dataFromApiPhotographer = new PhotographerApi(
        "../data/photographers.json"
    );
    let photographerData = await dataFromApiPhotographer.findPhotographerById(
        urlSearch.get("id")
    );
    const photographer = new Photographer(photographerData);
    let photographerCreate = new PhotographerFactories(photographer);
    photographerCreate.userProfilInformation();

    let mediaOfPhotographer =
        await dataFromApiPhotographer.findPhotographerMediaById(
            urlSearch.get("id")
        );

    photographerCreate.photographerMedia(
        mediaOfPhotographer,
        photographerData.name
    );
    sort.displayHiddenSortchoose();
    sort.sortByTitle(mediaOfPhotographer, photographerData);
    sort.sortByDate(mediaOfPhotographer, photographerData);
    sort.sortByPopularity(mediaOfPhotographer, photographerData);
    photographerCreate.incrementlike();
    photographerCreate.priceByday();
    form.validate();
    const lightboxfactories = new LightboxFactories();
    lightboxfactories.buildLightbox();

    const btnContact = document.getElementById("contact");
    const btnClose = document.querySelectorAll(".close");

    Modal.displayModal(btnContact);
    Modal.closeModal(btnClose);
    const linksImg = document.querySelectorAll(".photographer-media__img");

    const lightbox = new Lightbox(linksImg);
    lightbox.displayImage();
    // const btnnext = document.getElementById("btnnext");
    const btnPrev = document.getElementById("btnPrev");
    lightbox.next(btnnext);

    lightbox.prev(btnPrev);
    lightbox.keyDown()
}

init();
