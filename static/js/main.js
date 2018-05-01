(function() {

    if (location.search && location.search.match(/mode=full/gi) !== null) {
        document.getElementById('container').style.width = 'auto';
    }

    // Image carousel
    let slideIndex = 1;

    let showSlide = function(n) {

        const carousel__slides = document.querySelectorAll(".carousel__slide");
        n > carousel__slides.length && (slideIndex = 1);
        n < 1 && (slideIndex = carousel__slides.length);
        
        //carousel__slides.forEach(function(elem, index) { elem.style.display = "none"});
        for ( let i = 0, len = carousel__slides.length; i < len; i++ ) {
            carousel__slides[i].style.display = "none";
        }


        carousel__slides[slideIndex - 1].style.display = "block";
    }

    showSlide(slideIndex);
    let goToSlide = function(n)  {
        showSlide(slideIndex += n);
    }
    document.querySelector('.carousel__button--left').addEventListener('click', function() { goToSlide(-1) });
    document.querySelector('.carousel__button--right').addEventListener('click', function() { goToSlide(1) });
}());