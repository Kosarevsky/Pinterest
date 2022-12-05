import createElement from "../../utils/createElement";
import additionally from "../additionally";

function Card(id, avatar, description, photo) {
    this.id = id;
    this.avatar = avatar;
    this.description = description;
    this.photo = photo;
    this.element = null;
    this.wrapperPhoto = null;
    this.wrapperDescription = null;
    this.wrapperAvatar = null;

    this.createElements = function () {
        this.element = createElement("div", { className: "card" });

        this.wrapperPhoto = createElement("div", {
            className: "card__wrapperPhoto",
        });

        this.dots = createElement("div", {
            className: "card__dots",
            textContent: "●●●",
        });

        this.wrapperDescription = createElement("div", {
            className: "card__wrapperDescr",
        });

        this.wrapperAvatar = createElement("div", {
            className: "card__wrapperAvatar",
        });

        this.photo = createElement("img", {
            className: "card__photo",
            src: this.photo,
        });

        this.avatar = createElement("img", {
            className: "card__avatar",
            src: this.avatar,
        });

        this.description = createElement("p", {
            className: "card__description",
            textContent: this.description.slice(0, 15),
        });

        this.wrapperPhoto.append(this.photo, this.dots);
        this.wrapperDescription.append(this.wrapperAvatar, this.description);
        this.wrapperAvatar.append(this.avatar);
        this.element.append(this.wrapperPhoto, this.wrapperDescription);

        this.photo.addEventListener("mouseover", () => {
            this.visualEffect();
        });
        this.photo.addEventListener("mouseout", () => {
            this.visualEffect();
        });

        this.dots.addEventListener("mouseover", () => {
            this.visualEffect();
        });
        this.dots.addEventListener("mouseout", () => {
            this.visualEffect();
        });
        this.dots.addEventListener("click", () => {
            additionally.openModalAdditionally();
        });
    };
    this.visualEffect = function () {
        this.dots.classList.toggle("show");
        this.photo.classList.toggle("dark");
    };

    this.createElements();
}

export default Card;
