window.addEventListener("DOMContentLoaded", function () {
    let modalComplain = document.getElementById("modalComplain");
    let modal = document.getElementById("modalAdditionally");
    let btn = document.getElementById("btnAdditionally");
    let close = document.getElementsByClassName(
        "additionally-button__close",
    )[0];
    let add = document.getElementsByClassName("additionally-button__add")[0];
    let complainBtn = document.getElementsByClassName(
        "additionally-button__complain",
    )[0];

    function openModal() {
        modal.style.display = "flex";
    }
    btn.addEventListener("click", openModal);

    function closeModalComplain() {
        modal.style.display = "none";
        modalComplain.style.display = "flex";
    }

    complainBtn.addEventListener("click", closeModalComplain);

    function closeModal() {
        modal.style.display = "none";
    }
    close.addEventListener("click", closeModal);

    function closeModalAdd() {
        modal.style.display = "none";
    }
    add.addEventListener("click", closeModalAdd);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
