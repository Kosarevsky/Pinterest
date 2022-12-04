import createElement from "../utils/createElement";

const modalComplain = createElement("div", {
    className: "complain",
});
const form = createElement("div", {
    className: "complain-content",
});

const formTitle = createElement("h2", {
    textContent: "Жалоба на пин",
});

const complainWrapper = createElement("div", {
    className: "complain-content__button",
});
const chooseComplain = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain = createElement("label", {
    textContent: "Спам",
});
const paragrafComplain = createElement("p", {
    textContent: "Вводящие в заблуждение или повторяющиеся публикации",
});

complainWrapper.append(chooseComplain, labelComplain, paragrafComplain);

form.append(formTitle, complainWrapper);
// modal.open = true;
modalComplain.append(form);

const backdrop = createElement("div", { className: "backdrop hide" });
backdrop.addEventListener("click", closeModal);

/* buttonClosePin.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModal();
});

buttonAddPin.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModal();
});
 */
function closeModal() {
    modalComplain.open = false;
    backdrop.classList.add("hide");
}

function openModal() {
    modalComplain.open = true;
    backdrop.classList.remove("hide");
}

const wrapper = createElement("div");
wrapper.append(backdrop, modalComplain);

const modalObj = {
    element: wrapper,
    closeModal,
    openModal,
};

export default modalObj;
