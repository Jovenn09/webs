document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-flip');

    cards.forEach((card) => {
        card.addEventListener('click', function () {
            card.classList.toggle('flipped');
        });
    });
});
