import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;
  const html = document.getElementsByTagName('html')[0];

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      body.classList.toggle('overflow-hidden');
      html.classList.toggle('overflow-hidden');

      if (mobileMenu.classList.contains('open')) {
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  new Swiper('.partners-swiper', {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: true,
    grabCursor: true,
  });
});
