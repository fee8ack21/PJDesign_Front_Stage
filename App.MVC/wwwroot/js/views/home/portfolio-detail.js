$(function(){initSwiper(),handleSlideClick()});let swiper;function initSwiper(){swiper=new Swiper(".js-portfolio-swiper",{speed:1e3,loop:!0,effect:"fade",autoHeight:!0,pagination:{el:".swiper-pagination",clickable:!0}})}function handleSlideClick(){$(".home-portfolio-detail .swiper-slide").on("click",function(){null!=swiper&&swiper.slideNext()})}