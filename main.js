// Initialize Swiper
document.addEventListener('DOMContentLoaded', function(){
	const swiper = new Swiper('.swiper', {
		// Display central slide larger and allow side slides to be visible
		centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: true,
		grabCursor: true,
		keyboard: { enabled: true },
		pagination: { el: '.swiper-pagination', clickable: true },
		navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
		// Keep transition smooth
		speed: 350
	});
});

