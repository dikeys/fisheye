//Mettre le code JavaScript lié à la page photographer.html
//merci
import { PhotographerApi } from "../Api/PhotographerApi";
import { Photographer } from "../factories/photographer";

async function init() {
  let params = new URLSearchParams(document.location.search);
  let idPhotographer = params.get("id");

  const dataFromApiPhotographer = new PhotographerApi(
    "../data/photographers.json"
  );

  let photographerData = await dataFromApiPhotographer.findPhotographerById(
    idPhotographer
  );
  let photographer = new Photographer(photographerData);
}

init();
