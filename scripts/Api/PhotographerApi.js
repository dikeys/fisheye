import ajaxGet from "../utils/ajaxRequest";
import { Photographer } from "../factories/photographer";

export class PhotographerApi {
    #url;

    constructor(url) {
        this.#url = url;
    }

    async allPhotographers() {
        const photographers = await ajaxGet(this.#url);
        return photographers.photographers;
    }
    async photographersMedia() {
        const photographers = await ajaxGet(this.#url);
        return photographers.media;
    }

    async findPhotographerById(id) {
        let photographers = await this.allPhotographers();
        for (let photographer of photographers) {
            if (photographer.id === parseInt(id)) {
                return photographer;
            }
        }
    }
}
