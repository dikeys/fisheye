export class Photographer {
    #id;
    #name;
    #city;
    #country;
    #tagline;
    #price;
    #portrait;

    constructor(data) {
        this.#id = data.id;
        this.#name = data.name;
        this.#city = data.city;
        this.#country = data.country;
        this.#tagline = data.tagline;
        this.#price = data.price;
        this.#portrait = data.portrait;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get city() {
        return this.#city;
    }
    get country() {
        return this.#country;
    }
    get tagline() {
        return this.#tagline;
    }
    get price() {
        return this.#price;
    }
    get portrait() {
        return this.#portrait;
    }
}

// function photographerFactory(data) {
//   const { name, portrait, city, country, tagline, price } = data;
//   console.log(data.price);
//   const picture = `assets/photographers/${portrait}`;

//   function getUserCardDOM() {
//     const article = document.createElement("article");
//     const img = document.createElement("img");

//     img.setAttribute("src", picture);
//     const h2 = document.createElement("h2");
//     h2.textContent = name;

//     pLocation = document.createElement("p");
//     pLocation.classList.add("location");
//     pLocation.textContent = `${city}, ${country}`;

//     const pTagline = document.createElement("p");
//     pTagline.textContent = tagline;

//     const pPrice = document.createElement("p");
//     pPrice.textContent = `${price}/jour`;

//     article.appendChild(img);
//     article.appendChild(h2);
//     article.appendChild(pLocation);
//     article.appendChild(pTagline);
//     article.appendChild(pPrice);
//     return article;
//   }
//   return { name, picture, getUserCardDOM };
// }
