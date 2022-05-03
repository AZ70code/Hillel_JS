//import _ from 'lodash';
//import { moduleObj1 } from './modules/module1';
import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.testimonials__slider-body', {
	modules: [Navigation, Pagination],
	observer: true,
	observeParent: true,
    slidesPerView: 1,
    spaceBetween: 20,
	watchOverflow: true,
	loop: true,
	loopAdditionalSlides: 2,
	//Dotts
	pagination: {
		el: '.control__pagination',
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: '.swiper-control .control__arrow--next',
		prevEl: '.swiper-control .control__arrow--prev',
	},
});


