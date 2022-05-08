const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".slider_icon--next");
const prevBtn = document.querySelector(".slider_icon--previous");
const plusBtn = document.querySelector(".cart_quantity--plus");
const minusBtn = document.querySelector(".cart_quantity--minus");
const discountPrice = document.querySelector(
	".pricing_mobile--discountedprice"
);
const originalPrice = document.querySelector(".pricing_mobile--originalprice");
const amount = document.querySelector(".cart_quantity-amount");

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

let currentSlide = 1;

nextBtn.addEventListener("click", function (e) {
	e.preventDefault();
	slides.forEach(
		(s, i) =>
			(s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
	);
	currentSlide++;
	if (currentSlide >= 4) currentSlide = 0;
});

prevBtn.addEventListener("click", function (e) {
	e.preventDefault();
	slides.forEach(
		(s, i) =>
			(s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
	);
	currentSlide--;
	if (currentSlide == -1) currentSlide = 3;
});

let priceIndex = 1;

plusBtn.addEventListener("click", function () {
	amount.textContent++;
	priceIndex++;
	discountPrice.textContent = `${125 * priceIndex}.00$`;
	originalPrice.textContent = `${250 * priceIndex}.00$`;
});

minusBtn.addEventListener("click", function () {
	if (priceIndex > 1) {
		amount.textContent--;
		priceIndex--;
		discountPrice.textContent = `${125 * priceIndex}.00$`;
		originalPrice.textContent = `${250 * priceIndex}.00$`;
	}
});
