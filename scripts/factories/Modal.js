export class Modal {
    modalCreate() {
        let modalBackground = document.createElement("div");
        modalBackground.classList.add("modal__background");
        let modalContent = document.createElement("div");
        modalContent.classList.add("modal__content");
        modalContent.textContent = "text modal";
        modalBackground.appendChild(modalContent);
        document.body.insertAdjacentElement("beforeend", modalBackground);
    }
}

let btnContact = document.getElementById("contact");
