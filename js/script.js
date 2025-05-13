var swiper = new Swiper(".slide-content", {
      slidesPerView: 2,
      spaceBetween: 55,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
      0: {
        spaceBetween: 100
      },
      700: {
        spaceBetween: 70
      },
      900: {
        spaceBetween: 55
      }
    }
    });