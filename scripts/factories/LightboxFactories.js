import { Lightbox } from "../utils/lightbox";

export class LightboxFactories {
    buildLightbox() {
        let lightbox = document.createElement("div");

        lightbox.classList.add("modal", "modal--bg-white");

        let header = document.createElement("header");
        let btnClose = document.createElement("button");
        btnClose.classList.add("lightbox__btnclose", "lightbox__btn", "close");
        let divContainer = document.createElement("div");
        let btnPrevious = document.createElement("button");
        btnPrevious.classList.add("lightbox__btnprev", "lightbox__btn");
        btnPrevious.id = "btnPrev";
        btnPrevious.textContent = "precedent";
        let btnNext = document.createElement("button");
        btnNext.classList.add("lightbox__btnnext", "lightbox__btn");
        btnNext.id = "btnnext";
        btnNext.textContent = "Suivant";

        let figure = document.createElement("figure");
        figure.classList.add("lightbox__img-container")
        figure.innerHTML = "";
        let img = document.createElement("img");
        img.classList.add("lightbox__img")
        img.id = "imglightbox";
        let figcaption = document.createElement("figcaption")
        figcaption.classList.add("lightbox__img__title", "lightbox__img-title")
        figure.appendChild(img);
        figure.appendChild(figcaption)
        header.appendChild(btnNext);
        header.appendChild(btnPrevious);

        header.appendChild(btnClose);
        divContainer.appendChild(header);
        divContainer.appendChild(figure);
        lightbox.appendChild(divContainer);

        document.body.insertAdjacentElement("beforeend", lightbox);
    }
}
