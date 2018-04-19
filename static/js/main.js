(function() {

    if (location.search && location.search.match(/mode=full/gi) !== null) {
        document.getElementById('container').style.width = 'auto';
    }

    // Image carousel
    let slideIndex = 1;

    let showSlide = (n) => {
        
        const carousel__slide = document.querySelectorAll(".carousel__slide");
        n > carousel__slide.length && (slideIndex = 1);
        n < 1 && (slideIndex = carousel__slide.length);
        carousel__slide.forEach((elem, index) => elem.style.display = "none");
        carousel__slide[slideIndex - 1].style.display = "block";
    }

    showSlide(slideIndex);
    let goToSlide = (n) => showSlide(slideIndex += n);
    document.querySelector('.carousel__button--left').addEventListener('click', () => goToSlide(-1));
    document.querySelector('.carousel__button--right').addEventListener('click', () => goToSlide(1));
}());