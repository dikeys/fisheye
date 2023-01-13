import { Modal } from "./Modal";
export class Lightbox {
    #link;
    #images;

    constructor(images) {
        this.#images = images;
    }
    get link() {
        return this.#link;
    }
    get images() {
        return this.#images;
    }
    displayImage() {
        const lightboxContainer = document.querySelector(".modal--bg-white");
        this.images.forEach((linkOfImage) => {
            linkOfImage.addEventListener("click", (e) => {
                lightboxContainer.style.display = "flex";
                this.loadImage(
                    e.target.currentSrc,
                    e.target.nextElementSibling.firstChild.textContent
                );
            });
        });
    }

    next(btnNext) {
        btnNext.addEventListener("click", (e) => {
            this.goToNext();
        });
    }

    prev(btnPrev) {
        btnPrev.addEventListener("click", (e) => {
            this.goToPrev();
        });
    }

    keyDown() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                this.goToNext();
            } else if (e.key === "ArrowLeft") {
                this.goToPrev();
            }
            if (e.key === "Escape") {
                document.querySelector(".modal--bg-white").style.display =
                    "none";
            }
           
        });
    }

    loadImage(imageSrc, title) {
        let figure = document.querySelector(".lightbox__img-container");
        let videoElement = document.getElementById("video");
        if (videoElement != null) {
            videoElement.remove();
        }
        if (imageSrc.split(".").pop() === "mp4") {
            let imglightbox = document.getElementById("imglightbox");
            if (imglightbox != null) {
                imglightbox.remove();
            }
            let videoTag = document.createElement("video");
            videoTag.id = "video";
            videoTag.setAttribute("controls", "");
            videoTag.setAttribute("autoplay", "");
            videoTag.classList.add("lightbox__img");
            let sourceTag = document.createElement("source");
            sourceTag.src = imageSrc;
            sourceTag.type = "video/mp4";
            videoTag.appendChild(sourceTag);

            figure.insertAdjacentElement("afterbegin", videoTag);
        } else {
            let img = document.getElementById("imglightbox");
            if (img === null) {
                img = document.createElement("img");
            }

            img.classList.add("lightbox__img");
            img.id = "imglightbox";
            img.src = imageSrc;

            figure.insertAdjacentElement("afterbegin", img);
        }

        this.#link = imageSrc;

        let imageTile = document.querySelector(".lightbox__img-title");
        imageTile.textContent = title;
    }

    goToPrev() {
        let figure = document.querySelector(".lightbox__img-container");
        if (figure.firstElementChild != null) figure.firstElementChild.remove();
        let links = Array.from(this.images);
        let imageSrc = links.map((link) => link.currentSrc);
        let imageindex = imageSrc.findIndex((element) => element === this.link);

        if (imageindex === 0) {
            imageindex = links.length;
        }

        let imageTitle =
            links[imageindex - 1].nextElementSibling.firstChild.textContent;
        this.loadImage(imageSrc[imageindex - 1], imageTitle);
    }
    goToNext() {
        let figure = document.querySelector(".lightbox__img-container");
        figure.firstElementChild.remove();
        let links = Array.from(this.images);
        let imageSrc = links.map((link) => link.currentSrc);
        links.length;
        let imageindex = imageSrc.findIndex((element) => element === this.link);
        if (links.length - 1 === imageindex) {
            imageindex = -1;
        }
        let imageTitle =
            links[imageindex + 1].nextElementSibling.firstChild.textContent;

        this.loadImage(imageSrc[imageindex + 1], imageTitle);
    }
}
