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
const addtoCart = document.querySelector(".cart_add");
const navcartIcon = document.querySelector(".nav_div.cart--carticon");
const cartPopup = document.querySelector(".nav_div.cart--popup");
const cartPopupamount = document.querySelector(".nav_div.cart--popupamount");
const sliderCart = document.querySelector(".slider_cart");
const sliderCarttext = document.querySelector(".slider_cart--text");
const sliderCartorder = document.querySelector(".slider_cartorder");
const sliderCartorderprice = document.querySelector(".slider_cartorderprice");
const sliderCartorderspan = document.querySelector(
	".slider_cartorderprice--bold"
);
const cartOrderdelete = document.querySelector(".slider_cartorderdelete--icon");

let currentSlide = 1;
let priceIndex = 1;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const moveSlider = () => {
	slides.forEach(
		(s, i) =>
			(s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
	);
};

const nextSlider = () => {
	moveSlider();
	currentSlide++;
	if (currentSlide >= 4) currentSlide = 0;
};

const prevSlider = () => {
	moveSlider();
	currentSlide--;
	if (currentSlide == -1) currentSlide = 3;
};

const setPrices = () => {
	discountPrice.textContent = `${125 * amount.textContent}.00$`;
	originalPrice.textContent = `${250 * amount.textContent}.00$`;
};

const showEmptycart = () => {
	sliderCarttext.classList.remove("hidden");
	sliderCartorder.classList.add("hidden");
};

const showOrder = () => {
	sliderCarttext.classList.add("hidden");
	sliderCartorder.classList.remove("hidden");
};

addtoCart.addEventListener("click", () => {
	cartPopupamount.textContent = +cartPopupamount.textContent + priceIndex;
	cartPopup.classList.remove("hidden");
	if (!sliderCart.classList.contains("hidden")) showOrder();
	sliderCartorderprice.innerHTML = `$125.00 x ${
		cartPopupamount.textContent
	} <span class="slider_cartorderprice--bold">$${
		125 * cartPopupamount.textContent
	}</span>`;
});

navcartIcon.addEventListener("click", () => {
	sliderCart.classList.toggle("hidden");
	if (cartPopup.classList.contains("hidden")) showEmptycart();
	if (!cartPopup.classList.contains("hidden")) showOrder();
});

cartOrderdelete.addEventListener("click", () => {
	cartPopupamount.textContent = 0;
	cartPopup.classList.add("hidden");
	showEmptycart();
});

nextBtn.addEventListener("click", nextSlider);

prevBtn.addEventListener("click", prevSlider);

plusBtn.addEventListener("click", () => {
	priceIndex++;
	amount.textContent++;
	setPrices();
});

minusBtn.addEventListener("click", () => {
	if (amount.textContent > 1) {
		priceIndex--;
		amount.textContent--;
		setPrices();
	}
});
