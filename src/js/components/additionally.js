import createElement from "../utils/createElement";
import modalComplain from "./complain";

const additionally = createElement("div", {
    className: "additionally",
});
const form = createElement("div", {
    className: "additionally-content",
});

const formTitle = createElement("p", {
    textContent: "Этот пин похож на те, которые вы недавно просматривали",
});

const additionallyWrapper = createElement("div", {
    className: "additionally-button",
});
const buttonClosePin = createElement("button", {
    className: "additionally-button additionally-button__close",
    textContent: "Скрыть пин",
});
const buttonAddPin = createElement("button", {
    className: "additionally-button additionally-button__add",
    textContent: "Добавить на доску",
});
const buttonComplainPin = createElement("button", {
    className: "additionally-button additionally-button__complain",
    textContent: "Пожаловаться на пин",
});
additionallyWrapper.append(buttonClosePin, buttonAddPin, buttonComplainPin);

form.append(formTitle, additionallyWrapper);
additionally.append(form);

const backdrop = createElement("div", { className: "backdrop hide" });
backdrop.addEventListener("click", closeModal);

buttonClosePin.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModal();
});

buttonAddPin.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModal();
});

function closeModal() {
    additionally.open = false;
    backdrop.classList.add("hide");
}

function openModal() {
    additionally.open = true;
    console.log(additionally.openModal);
    backdrop.classList.remove("hide");
}

const wrapper = createElement("div");
wrapper.append(backdrop, additionally);

const modalObj = {
    element: wrapper,
    closeModal,
    openModal,
};

export default modalObj;
