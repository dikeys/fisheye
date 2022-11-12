export class PhotographerCreate {
  #photographer;

  constructor(Photographer) {
    this.#photographer = Photographer;
  }

  getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");

    img.setAttribute("src", `assets/photographers/account.png`);
    const h2 = document.createElement("h2");
    h2.textContent = this.#photographer.name;

    const pLocation = document.createElement("p");
    pLocation.classList.add("location");
    pLocation.textContent = `${this.#photographer.city}, ${
      this.#photographer.country
    }`;

    const pTagline = document.createElement("p");
    pTagline.textContent = this.#photographer.tagline;

    const pPrice = document.createElement("p");
    pPrice.textContent = `${this.#photographer.price}/jour`;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pLocation);
    article.appendChild(pTagline);
    article.appendChild(pPrice);
    return article;
  }
}
