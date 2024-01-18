const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView:3,
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        268: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },});
  
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
        if (currentScroll > lastScrollTop) {
            // Scroll down
            navbar.classList.add('hidden');
        } else {
            // Scroll up
            navbar.classList.remove('hidden');
        }
    
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });