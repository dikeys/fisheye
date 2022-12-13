/**
 * Verification if input text is empty
 * @param {node} input selector input you want check
 */
export function isInputTextEmpty(inputToChecks) {
    let valid = true;
    let regex = /^[A-Za-z]+/;
    for (let inputToCheck of inputToChecks) {
        if (
            !inputToCheck.value ||
            inputToCheck.value.length < 2 ||
            inputToCheck.value === "" ||
            !inputToCheck.value.match(regex)
        ) {
            addErrorTextInvalidInput(inputToCheck, "au minimun 2 caractères");
            valid = false;
        }
    }
    return valid;
}

/**
 *  add error text after input
 * @param {node} previousElement Element where the have test and where the text should be displayed next
 * @param {string} message The message to display on error
 */
export function addErrorTextInvalidInput(previousElement, message) {
    previousElement.insertAdjacentHTML(
        "afterend",

        '<span class="error" style="color:white;font-size: small">Ce champs doit ' +
            message +
            "</span>"
    );
}

/**
 *  remove error text after input
 * @param {callback} callback callback
 */
export function removeErrorInvalidInputText(callback) {
    let errorSpans = document.querySelectorAll(".error");
    errorSpans.forEach((e, a) => {
        callback(e, a);
    });
}

/**
 *  check if email is valide
 * @param {string }emailSelector selector input email you want check
 * @param {node} addErrorAfterElements node element to add error after
 */
export function validateEmail(emailValue, addErrorAfterElements) {
    const validRegexEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;

    if (emailValue.match(validRegexEmail)) {
        return true;
    }

    addErrorTextInvalidInput(addErrorAfterElements, "être un email valide");
    return false;
}


/**
 * Verify text area 
 * @param {node} textareaTocheck 
 * @param {node} addErrorAfterElements 
 */
function validationTextArea(textareaTocheck, addErrorAfterElements) {
    if (textareaTocheck.value.length < 2) {
        addErrorTextInvalidInput(
            addErrorAfterElements,
            "être un message valide"
        );
    }
}

/**
 * validate form
 */
export function validate() {
    const inputName = document.querySelector("input[name='firstname']");
    const inputLastName = document.querySelector("input[name='lastname']");
    const emailToCheck = document.querySelector("input[name='email']");
    const message = document.getElementById("message");
    const inputTextToCheck = [inputName, inputLastName];
    const buttonSubmit = document.querySelector(".contact__button");

    buttonSubmit.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        let t = 0;
        removeErrorInvalidInputText((elt) => elt.remove());
        isInputTextEmpty(inputTextToCheck);
        validateEmail(emailToCheck.value, emailToCheck);
        validationTextArea(message, message);
        removeErrorInvalidInputText((span, nb) => {
            t++;
        });
        if (t < 1) {
            console.log(`nom :${inputName.value}`);
            console.log(`Prénom :${inputLastName.value}`);
            console.log(`Email :${emailToCheck.value}`);
            console.log(`Message :${message.value}`);
        }
    });
}
