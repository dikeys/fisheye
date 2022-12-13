// export class ModalFactory {
//     #photogragrapher;

//     constructor(photogragrapher) {
//         this.#photogragrapher = photogragrapher;
//     }
//     modalCreate() {
//         let modalBackground = document.createElement("div");
//         modalBackground.classList.add("modal__background");
//         let modalContent = document.createElement("div");
//         modalContent.classList.add("modal__content");

//         let heading = document.createElement("h1");
//         heading.classList.add("modal__heading");
//         heading.textContent = `Contactez-moi ${this.#photogragrapher.name}`;
//         modalBackground.appendChild(modalContent);
//         document.body.insertAdjacentElement("beforeend", modalBackground);
//     }
// }
