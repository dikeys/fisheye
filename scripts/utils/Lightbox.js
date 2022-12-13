export class Lightbox {
    #link;
    constructor(link) {
        this.#link = link;
    }

    get link() {
        return this.#link;
    }
}
