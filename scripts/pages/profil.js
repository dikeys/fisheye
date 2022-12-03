//Mettre le code JavaScript lié à la page photographer.html
//merci
import { PhotographerApi } from "../Api/PhotographerApi";
import { Modal } from "../factories/Modal";
import { Photographer } from "../factories/photographer";
import { PhotographerCreate } from "../factories/PhotographerCreate";

async function init() {
    let urlSearch = new URLSearchParams(document.location.search);

    const dataFromApiPhotographer = new PhotographerApi(
        "../data/photographers.json"
    );
    let photographerData = await dataFromApiPhotographer.findPhotographerById(
        urlSearch.get("id")
    );
    let photographer = new Photographer(photographerData);
    let photographerCreate = new PhotographerCreate(photographer);
    photographerCreate.userProfilInformation();
    // let modal = new Modal();
    // modal.modalCreate();

    let mediaOfPhotographer =
        await dataFromApiPhotographer.findPhotographerMediaById(
            urlSearch.get("id")
        );
   
    photographerCreate.photographerMedia(mediaOfPhotographer, photographerData.name);
}

init();
