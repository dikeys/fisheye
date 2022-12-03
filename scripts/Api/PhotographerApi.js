import ajaxGet from "../utils/ajaxRequest";
import { Photographer } from "../factories/photographer";

export class PhotographerApi {
    #url;
    #photographers;

    constructor(url) {
        this.#url = url;
        this.#photographers = ajaxGet(this.#url);
    }

    async allPhotographers() {
        let photographers = await this.#photographers;
        return photographers;
    }
    // async photographerMedia() {
    //     const photographers = await ajaxGet(this.#url);
    //     return photographers.media;
    // }

    async findPhotographerById(id) {
        let photographers = await this.allPhotographers();
        for (let photographer of photographers.photographers) {
            if (photographer.id === parseInt(id)) {
                return photographer;
            }
        }
    }

    async findPhotographerMediaById(id) {
        let medias = [];
        let photographers = await this.allPhotographers();
        for (let media of photographers.media) {
            if (media.photographerId === parseInt(id)) {
                medias.push(media);
            }
        }
        return medias;
    }
}
