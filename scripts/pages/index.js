import { PhotographerCreate } from "../factories/PhotographerCreate";
import { PhotographerApi } from "../Api/PhotographerApi";

// let data = new PhotographerApi("../data/photographers.json");
// console.log(data.allPhotographers());

// console.log(data);
// async function getPhotographers() {
//   // Penser à remplacer par les données récupérées dans le json
// const photographers = [
//   {
//     name: "Ma data test",
//     id: 1,
//     city: "Paris",
//     country: "France",
//     tagline: "Ceci est ma data test",
//     price: 400,
//     portrait: "account.png"
//   },
//   {
//     name: "Autre data test",
//     id: 2,
//     city: "Londres",
//     country: "UK",
//     tagline: "Ceci est ma data test 2",
//     price: 500,
//     portrait: "account.png"
//   },
//   {
//     name: "Autre data test",
//     id: 2,
//     city: "italie",
//     country: "UK",
//     tagline: "Ceci est ma data test 2",
//     price: 500,
//     portrait: "account.png"
//   }
// ];

// photographerFactories.getUserCardDOM();

//   // et bien retourner le tableau photographers seulement une fois
//   return {
//     photographers: [...photographers, ...photographers, ...photographers]
//   };
// }

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

async function init() {
  let photographerSection = document.querySelector(".photographer-section");

  const dataFromApiPhotographer = new PhotographerApi(
    "../data/photographers.json"
  );

  dataFromApiPhotographer.allPhotographers().then((photographers) => {
    photographers.forEach((element) => {
      const photographerFactories = new PhotographerCreate(element);

      photographerSection.appendChild(photographerFactories.getUserCardDOM());
    });
  });

  // photographers.forEach((element) => {
  //   const photographerFactories = new PhotographerCreate(element);
  //   let photographerSection = document.querySelector(".photographer-section");
  //   photographerSection.appendChild(photographerFactories.getUserCardDOM());
  // });
  // // Récupère les datas des photographes
  // const { photographers } = await getPhotographers();
  // displayData(photographers);
}

init();
