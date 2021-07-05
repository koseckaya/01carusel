
function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClass();

            slide.classList.add('active')
        })
    }


    function clearActiveClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}
slidesPlugin()