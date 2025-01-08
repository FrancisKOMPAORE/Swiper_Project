// Swiper JS
let swiper = new Swiper('.card-content', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        650:{
            slidesPerView: 2,
        },
        1140:{
            slidesPerView: 3,
        }
    }
  });