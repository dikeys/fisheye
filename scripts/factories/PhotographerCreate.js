import { Modal } from "./Modal";

export class PhotographerCreate {
    #photographer;

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
        let pName = document.createElement("p");
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

        let selectPopularity = document.createElement("select");
        selectPopularity.classList.add("main-sort__popularity");

        // selectPopularity.addEventListener("focusout", (e) => {
        //     console.log(e.target);
        // });
        let optionEmpty = document.createElement("option");
        optionEmpty.textContent = "Popularité";
        optionEmpty.style.display = "none";
        selectPopularity.appendChild(optionEmpty);

        for (let valueOption of ["Date", "Titre"]) {
            let selectOption = document.createElement("option");
            selectOption.classList.add("main-sort__popularity__option");
            selectOption.value = valueOption;
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
        // let items = ArrayMediaPhotographer.sort((a, b) => {
        //     return a.image > b.image;
        // });

        ArrayMediaPhotographer.forEach((element) => {
            console.log(element);
            let article = document.createElement("article");
            article.classList.add("photographer-media__container");

            let imgMedia = document.createElement("img");
            imgMedia.classList.add("photographer-media__img");
            imgMedia.src = `../assets/images/media/${
                photographerName.split(" ")[0]
            }/${element.image}`;

            let containerTitle = document.createElement("div");
            containerTitle.classList.add("photographer-media__container-title");
            let title = document.createElement("p");
            title.classList.add("photographer-media__title");
            title.textContent = element.title;

            let divHeart = document.createElement("div");
            let heart = document.createElement("img");
            let nbLike = document.createElement("p");
            nbLike.textContent = element.likes;

            divHeart.appendChild(nbLike);
            divHeart.appendChild(heart);

            containerTitle.appendChild(title);
            containerTitle.appendChild(divHeart);

            article.appendChild(imgMedia);
            article.appendChild(containerTitle);
            mediaContainer.appendChild(article);
        });
    }
}
