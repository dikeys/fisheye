import { PhotographerCreate } from "../factories/PhotographerCreate";
import { PhotographerApi } from "../Api/PhotographerApi";
import { Photographer } from "../factories/photographer";

async function init() {
    const photographerSection = document.querySelector(".photographer-section");

    const dataFromApiPhotographer = new PhotographerApi(
        "../data/photographers.json"
    );
    const allPhotographers = await dataFromApiPhotographer.allPhotographers();

    allPhotographers.photographers.forEach((data) => {
        let photographer = new Photographer(data);
        const photographerFactories = new PhotographerCreate(photographer);
        photographerSection.appendChild(photographerFactories.getUserCardDOM());
    });
}

init();
