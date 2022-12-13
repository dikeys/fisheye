export class Modal {
    static displayModal(btn) {
        btn.addEventListener("click", () => {
            const modal = document.querySelector(".modal");
            modal.style.display = "flex";
        });
    }

    static closeModal(btn) {
        btn.addEventListener("click", () => {
            const modal = document.querySelector(".modal");
            modal.style.display = "none";
        });
    }
}
