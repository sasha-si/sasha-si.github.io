$(document).ready(function () {
   $('.slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      asNavFor: '.slider-small',
   });

   $('.slider-small').slick({
      arrows: true,
      slidesToShow: 5,
      vertical: true,
      verticalSwiping: true,
      slidesToScroll: 1,
      asNavFor: '.slider-big',
      focusOnSelect: true,
      centerPadding: 0,
      infinite: false,
   });

   $('.burger').click(function (event) {
      $('.burger, .header__content-nav-list').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

const hideText = document.querySelector('.about__info-rolling-up');
hideText.addEventListener('click', () => {
   hideText.classList.toggle('active');
   if (hideText.classList.contains('active')) {
      hideText.innerHTML = 'Less text';
      document.querySelector('.about__info-hidden').style.display = 'block';
   } else {
      hideText.innerHTML = 'More';
      document.querySelector('.about__info-hidden').style.display = 'none';
   }
});

let selectedSize = document.querySelector('.about__sizes-list');

selectedSize.addEventListener('click', (event) => {   
   let target = event.target;

   highlight(target);
});

function highlight(size) {
   if (selectedSize) {
     selectedSize.classList.remove('active');
   }
   selectedSize = size;
   selectedSize.classList.add('active');
 }
