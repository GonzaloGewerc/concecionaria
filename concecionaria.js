document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel__container-autos');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const items = document.querySelectorAll('.carousel__item-autos');
    let index = 0;
    
    function showSlide(i) {
        const totalItems = items.length;
        index = (i + totalItems) % totalItems; // ensure index is within bounds
        container.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });
});
