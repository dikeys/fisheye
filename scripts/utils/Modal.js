export class Modal {
    static displayModal(btn) {
        btn.addEventListener("click", () => {
            const modal = document.querySelector(".modal");
            modal.style.display = "flex";
        });
    }

    static closeModal(btn) {
    
        btn.forEach((btnClose) => {
            btnClose.addEventListener("click", (event) => {
                event.target.parentNode.parentNode.parentNode.style.display =
                    "none";
            });
        });
    }

    static closeOnkeyUp(){


    }
}
