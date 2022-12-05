import createElement from "../utils/createElement";
import complain from "./complain";

const backdrop = createElement("div", { className: "backdrop hide" });
const additionally = createElement("dialog", {
    className: "additionally",
});
const additionallyContent = createElement("div", {
    className: "additionally-content",
});

const formTitle = createElement("p", {
    textContent: "Этот пин похож на те, которые вы недавно просматривали",
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

additionallyContent.append(
    formTitle,
    buttonClosePin,
    buttonAddPin,
    buttonComplainPin,
);
additionally.append(additionallyContent);

backdrop.addEventListener("click", closeModalAdditionally);

buttonClosePin.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModalAdditionally();
});

buttonAddPin.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModalAdditionally();
});

buttonComplainPin.addEventListener("click", () => {
    closeModalAdditionally();
    complain.openModalComplain();
});

function closeModalAdditionally() {
    additionally.open = false;
    backdrop.classList.add("hide");
}

function openModalAdditionally() {
    additionally.open = true;
    backdrop.classList.remove("hide");
}

const wrapper = createElement("div");
wrapper.append(backdrop, additionally);

const modalObj = {
    element: wrapper,
    closeModalAdditionally,
    openModalAdditionally,
};

export default modalObj;
