import createElement from "../../utils/createElement";
import Card from "./Card.js";
import { loadCards } from "../api/loadData";

const cards = {
    element: createElement("section"),
    list: [],

    addCard(id, avatar, description, photo) {
        const card = new Card(id, avatar, description, photo);
        this.list.push(card);
        this.element.append(card.element);
    },

    async getCards() {
        try {
            const data = await loadCards();
            data.forEach((card) => {
                this.addCard(
                    card.id,
                    card.avatar,
                    card.description,
                    card.photo,
                );
            });
        } catch (e) {
            console.log(e);
        }
    },
};

export default cards;
