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

  get userProfilinformation(){
    
  }
}
