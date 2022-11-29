window.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modalComplain");
    let btn = document.getElementById("btnComplain");
    let close = document.getElementsByClassName("modal-content__cancel")[0];
    let send = document.getElementsByClassName("modal-content__send")[0];
    function openModal() {
        modal.style.display = "flex";
    }
    btn.addEventListener("click", openModal);

    function closeModal() {
        modal.style.display = "none";
    }
    close.addEventListener("click", closeModal);

    function sendModal() {
        modal.style.display = "none";
    }
    send.addEventListener("click", sendModal);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
