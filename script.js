const sliderButtons = document.querySelectorAll("[data-carousel-button]");


sliderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})


const bookingButton = document.getElementsByClassName("booking_button");
const successBookingInfo = document.getElementById("form_success_booking");
function clickBookingButton() {
    successBookingInfo.style.display = 'flex';
}

function clickClose() {
    successBookingInfo.style.display = 'none';
}
