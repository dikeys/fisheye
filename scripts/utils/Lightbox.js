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
            // console.log(linkOfImage)
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
            let links = Array.from(this.images);
            let imageSrc = links.map((link) => link.currentSrc);
            // console.log(links)
            console.log(imageSrc)

            let imageindex = imageSrc.findIndex(
                (element) => element === this.link
            );
            let imageTitle =
                links[imageindex + 1].nextElementSibling.firstChild.textContent;
            this.loadImage(imageSrc[imageindex + 1], imageTitle);
        });
    }

    prev(btnPrev) {
        btnPrev.addEventListener("click", (e) => {
            let links = Array.from(this.images);
            let imageSrc = links.map((link) => link.getAttribute("currentSrc"));
            let imageindex = imageSrc.findIndex(
                (element) => element === this.link
            );
            let imageTitle =
                links[imageindex - 1].nextElementSibling.firstChild.textContent;
            this.loadImage(imageSrc[imageindex - 1], imageTitle);
        });
    }

    loadImage(imageSrc, title) {
   
       
        if (imageSrc.split(".").pop() === "mp4"){
            let imglightbox = document.getElementById("imglightbox");
            let figure = imglightbox.parentNode
           imglightbox.remove()
           let videoTag = document.createElement("video")
           videoTag.setAttribute("controls","")
           videoTag.setAttribute("autoplay","")
           videoTag.classList.add("lightbox__img")
           let sourceTag = document.createElement("source")
           sourceTag.src = imageSrc
           sourceTag.type = "video/mp4"
           videoTag.appendChild(sourceTag)
        //    console.log(figure)
           figure.appendChild(videoTag)
        }else{
            let img = document.createElement("img");
        img.classList.add("lightbox__img")
        img.id = "imglightbox";
        img.src = imageSrc;
            figure.appendChild(img)
        }
        
        
        this.#link = imageSrc;

        let imageTile = document.querySelector(".lightbox__img-title");
        imageTile.textContent = title;
    }
}
