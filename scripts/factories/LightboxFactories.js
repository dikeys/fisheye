import { Lightbox } from "../utils/lightbox";

export class LightboxFactories {
    #link;
    constructor(link) {
        this.#link;
    }

    buildLightbox() {
        let lightbox = document.createElement("div");
        // lightbox.classList.add("modal");
        lightbox.style.display = "flex";
        const linksImg = document.querySelectorAll(
            ".photographer-media__container"
        );
        linksImg.forEach((link) => {
            new Lightbox(link);
            // console.log(link);
            let figure = document.createElement("figure");
        });

        document.body.insertAdjacentElement("beforeend", lightbox);
    }

    displayLightbox() {
        const linksImg = document.querySelectorAll(".photographer-media__img");
        linksImg.forEach((link) => {
            link.addEventListener("click", (e) => {
                let lightbox = document.createElement("div");
                lightbox.classList.add("modal");
                lightbox.style.display = "flex";
                let figure = document.createElement("figure");
                let img = document.createElement("img");
                img.src = e.target.src;
                console.log(img);
                figure.appendChild(img);
                lightbox.appendChild(figure);
                document.body.insertAdjacentElement("beforeend", lightbox);
            });
        });
    }
}
