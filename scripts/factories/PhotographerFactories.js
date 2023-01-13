export class PhotographerFactories {
    #photographer;
    #totalLike;

    constructor(Photographer) {
        this.#photographer = Photographer;
    }

    getUserCardDOM() {
        const a = document.createElement("a");
        a.href = `photographer.html?id=${this.#photographer.id}`;
        const article = document.createElement("article");
        article.classList.add("photographer-section__card");
        const img = document.createElement("img");

        img.setAttribute(
            "src",
            `../assets/photographers/${this.#photographer.portrait}`
        );
        img.classList.add("photographer-section__img");

        const h2 = document.createElement("h2");
        h2.classList.add("photographer-section__name");
        h2.textContent = this.#photographer.name;

        const pLocation = document.createElement("p");
        pLocation.classList.add("photographer-section__location");
        pLocation.textContent = `${this.#photographer.city}, ${
            this.#photographer.country
        }`;

        const pTagline = document.createElement("p");
        pTagline.classList.add("photographer-section__tagline");
        pTagline.textContent = this.#photographer.tagline;
        const pPrice = document.createElement("p");
        pPrice.classList.add("photographer-section__price");
        pPrice.textContent = `${this.#photographer.price}€/jour`;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pLocation);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        a.appendChild(article);
        return a;
    }

    userProfilInformation() {
        let mainSection = document.querySelector(".profil");

        let profilSection = document.createElement("article");
        profilSection.classList.add("profil__information");

        let divName = document.createElement("div");
        let pName = document.createElement("h1");
        pName.classList.add("profil__name");
        pName.textContent = this.#photographer.name;

        let pLocation = document.createElement("p");
        pLocation.classList.add("profil__location");
        pLocation.textContent = `${this.#photographer.city}, ${
            this.#photographer.country
        } `;

        let pDescription = document.createElement("p");
        pDescription.classList.add("profil__expression");
        pDescription.textContent = this.#photographer.tagline;

        let btnContact = document.createElement("button");
        btnContact.classList.add(
            "profil__button",
            "btn-m",
            "btn-m--bg-secondary",
            "btn-m--rounded-sm",
            "btn-m--color-white"
        );
        btnContact.id = "contact";
        btnContact.textContent = "Contactez-moi";

        let imgUser = document.createElement("img");
        imgUser.classList.add("profil__img");
        imgUser.src = `../assets/photographers/${this.#photographer.portrait}`;

        let divSort = document.createElement("div");
        divSort.classList.add("main-sort");

        let sortText = document.createElement("h4");
        sortText.classList.add("main-sort__text");
        sortText.textContent = "Trier par :";

        let selectPopularity = document.createElement("ul");
        selectPopularity.classList.add("main-sort__select");

        let liPopularity = document.createElement("li");
        liPopularity.classList.add("main-sort__select__popularity");
        liPopularity.textContent = "Popularité";
        liPopularity.id = "popularity";
        let icon = document.createElement("p");
        icon.classList.add("main-sort__select__icon");
        icon.textContent = "<";
        icon.id = "icon";

        divSort.insertAdjacentElement("beforeend", icon);
        selectPopularity.appendChild(liPopularity);

        for (let valueOption of ["Titre", "Date"]) {
            let selectOption = document.createElement("li");
            selectOption.classList.add("main-sort__select__option");
            selectOption.id = valueOption.toLowerCase();
            selectOption.textContent = valueOption;
            selectPopularity.appendChild(selectOption);
        }

        divSort.appendChild(sortText);
        divSort.appendChild(selectPopularity);

        divName.appendChild(pName);
        divName.appendChild(pLocation);
        divName.appendChild(pDescription);
        profilSection.appendChild(divName);
        profilSection.appendChild(btnContact);
        profilSection.appendChild(imgUser);

        mainSection.appendChild(profilSection);
        mainSection.appendChild(divSort);
    }

    photographerMedia(ArrayMediaPhotographer, photographerName) {
        let mediaContainer = document.querySelector(".photographer-media");

        ArrayMediaPhotographer.forEach((element) => {
            let figure = document.createElement("figure");
            figure.classList.add("photographer-media__container");

            let video = document.createElement("video");
            video.classList.add("photographer-media__img");
            let source = document.createElement("source");

            if (element.video != undefined) {
                source.setAttribute(
                    "src",
                    new URL(
                        `assets/images/media/${
                            photographerName.split(" ")[0]
                        }/${element.video}`,
                        "http://fisheye2/"
                    )
                );
                source.setAttribute("type", "video/mp4");
                console.log(source)
                video.appendChild(source);
                figure.appendChild(video);
            } else {
                let imgMedia = document.createElement("img");
                imgMedia.classList.add("photographer-media__img");
                imgMedia.src = new URL(
                    `assets/images/media/${photographerName.split(" ")[0]}/${
                        element.image
                    }`,
                    "http://fisheye2/"
                );
                imgMedia.alt = element.title
                figure.appendChild(imgMedia);
            }
            let containerTitle = document.createElement("figcaption");
            containerTitle.classList.add("photographer-media__container-title");
            let TitleImg = document.createElement("p");
            TitleImg.classList.add("photographer-media__title");
            TitleImg.textContent = element.title;

            let divHeart = document.createElement("div");
            divHeart.classList.add("photographer-media__div-heart");
            let heart = document.createElement("p");
            heart.classList.add("photographer-media__heart");
            heart.innerHTML = '<i class="heart fa-solid fa-heart"></i>';

            let nbLike = document.createElement("p");
            nbLike.classList.add("nb-like");
            nbLike.textContent = element.likes;

            divHeart.appendChild(nbLike);
            divHeart.appendChild(heart);

            containerTitle.appendChild(TitleImg);
            containerTitle.appendChild(divHeart);

            figure.appendChild(containerTitle);
            mediaContainer.appendChild(figure);
        });
    }

    incrementlike() {
        let hearts = document.querySelectorAll(".heart");
        for (let heart of hearts) {
            let limiteLike = 0;
            heart.addEventListener("click", (event) => {
                let nbLike = parseInt(
                    event.target.parentNode.parentNode.firstChild.textContent
                );
                if (nbLike != limiteLike) {
                    limiteLike = nbLike + 1;
                    event.target.parentNode.parentNode.firstChild.textContent =
                        nbLike + 1;
                }
                let deleteDisplayPriceByDay =
                    document.querySelector(".price-day");

                deleteDisplayPriceByDay.remove();
                this.priceByday();
            });
        }
    }

    priceByday() {
        let pageMain = document.getElementById("main");
        let divPriceBydayContainer = document.createElement("div");
        divPriceBydayContainer.classList.add("price-day");

        let totalLike = 0;

        let getAllLike = document.querySelectorAll(".nb-like");
        getAllLike.forEach((plike) => {
            totalLike += parseInt(plike.textContent);
        });

        let pTotalLike = document.createElement("p");
        pTotalLike.innerHTML = `${totalLike} <i class="heart fa-solid fa-heart"></i>`;

        let pPriceByDay = document.createElement("p");
        pPriceByDay.textContent = `${this.#photographer.price}€ / jour`;

        divPriceBydayContainer.appendChild(pTotalLike);
        divPriceBydayContainer.appendChild(pPriceByDay);

        pageMain.insertAdjacentElement("beforeend", divPriceBydayContainer);
    }
}
