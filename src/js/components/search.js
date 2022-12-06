import cards from "./cards";

const search = document.querySelector("search__text");

search.addEventListener("input", (e) => {
    cards.showCardsByInputText(e.target.value);
});

export default showCardsByInputText;
