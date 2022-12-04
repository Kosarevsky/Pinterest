import createElement from "../utils/createElement";

const complain = createElement("dialog", {
    className: "complain",
});
const form = createElement("div", {
    className: "complain-content",
});

const formTitle = createElement("h2", {
    textContent: "Жалоба на пин",
});

const complainWrapper = createElement("div", {
    className: "complain-content__input",
});
const chooseComplain1 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain1 = createElement("label", {
    textContent: "Спам",
});
const paragrafComplain1 = createElement("p", {
    textContent: "Вводящие в заблуждение или повторяющиеся публикации",
});

const chooseComplain2 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain2 = createElement("label", {
    textContent: "Изображения обнаженного тела или порнография",
});
const paragrafComplain2 = createElement("p", {
    textContent: "Содержимое сексуального характера",
});

const chooseComplain3 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain3 = createElement("label", {
    textContent: "Членовредительство",
});
const paragrafComplain3 = createElement("p", {
    textContent:
        "Расстройства пищевого поведения, нанесение травм себе, суицид",
});

const chooseComplain4 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain4 = createElement("label", {
    textContent: "Ложная информация",
});
const paragrafComplain4 = createElement("p", {
    textContent:
        "Ложная информация о здоровье, климате, голосованиях или теории заговора",
});

const chooseComplain5 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain5 = createElement("label", {
    textContent: "Агрессивные действия",
});
const paragrafComplain5 = createElement("p", {
    textContent:
        "Предрассудки, стереотипы, идея превосходства белой расы, оскорбления",
});

const chooseComplain6 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain6 = createElement("label", {
    textContent: "Опасные товары",
});
const paragrafComplain6 = createElement("p", {
    textContent: "Наркотики, оружие, регулируемые товары",
});

const chooseComplain7 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain7 = createElement("label", {
    textContent: "Преследование или нарушение конфиденциальности",
});
const paragrafComplain7 = createElement("p", {
    textContent: "Оскорбления, угрозы, публикация персональных данных",
});

const chooseComplain8 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain8 = createElement("label", {
    textContent: "Сцены насилия",
});
const paragrafComplain8 = createElement("p", {
    textContent: "Графическое изображение или пропаганда насилия",
});

const chooseComplain9 = createElement("input", {
    className: "modal-content__radio-button",
    type: "radio",
});
const labelComplain9 = createElement("label", {
    textContent: "Это моя интеллектуальная собственность",
});
const paragrafComplain9 = createElement("p", {
    textContent: "Нарушение авторских прав или прав на товарный знак",
});

complainWrapper.append(
    chooseComplain1,
    labelComplain1,
    paragrafComplain1,
    chooseComplain2,
    labelComplain2,
    paragrafComplain2,
    chooseComplain3,
    labelComplain3,
    paragrafComplain3,
    chooseComplain4,
    labelComplain4,
    paragrafComplain4,
    chooseComplain5,
    labelComplain5,
    paragrafComplain5,
    chooseComplain6,
    labelComplain6,
    paragrafComplain6,
    chooseComplain7,
    labelComplain7,
    paragrafComplain7,
    chooseComplain8,
    labelComplain8,
    paragrafComplain8,
    chooseComplain9,
    labelComplain9,
    paragrafComplain9,
);

const buttons = createElement("div", {
    className: "complain-content__button",
});

const buttonClose = createElement("button", {
    className: "complain-content__button complain-content__button-close",
    textContent: "Отмена",
});

const buttonEnter = createElement("button", {
    className: "complain-content__button complain-content__button-send",
    textContent: "Далее",
});

buttons.append(buttonEnter, buttonClose);

form.append(formTitle, complainWrapper, buttons);
complain.append(form);

const backdrop = createElement("div", { className: "backdrop hide" });
backdrop.addEventListener("click", closeModalComplain);
buttonClose.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModalComplain();
});

buttonEnter.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModalComplain();
});

function closeModalComplain() {
    complain.open = false;
    backdrop.classList.add("hide");
}

function openModalComplain() {
    complain.open = true;
    backdrop.classList.remove("hide");
}

const wrapper = createElement("div");
wrapper.append(backdrop, complain);

const modalObj = {
    element: wrapper,
    closeModalComplain,
    openModalComplain,
};

export default modalObj;
