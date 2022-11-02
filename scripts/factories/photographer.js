function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;
  console.log(data.price);
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");

    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;

    pLocation = document.createElement("p");
    pLocation.classList.add("location");
    pLocation.textContent = `${city}, ${country}`;

    const pTagline = document.createElement("p");
    pTagline.textContent = tagline;

    const pPrice = document.createElement("p");
    pPrice.textContent = `${price}/jour`;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pLocation);
    article.appendChild(pTagline);
    article.appendChild(pPrice);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
