const slides = document.querySelectorAll(".slider__img");
const nextBtn = document.querySelector(".slider__icon--next");
const prevBtn = document.querySelector(".slider__icon--previous");
const plusBtn = document.querySelector(".amount__btn--plus");
const minusBtn = document.querySelector(".amount__btn--minus");
const discountPrice = document.querySelector(".price__amount--discountedprice");
const originalPrice = document.querySelector(".price__amount--originalprice");
const amount = document.querySelector(".amount__number");
const addtoCart = document.querySelector(".quantity__div--addtoCart");
const navMenu = document.querySelector(".navmobile__hamburger");
const navMenuBar = document.querySelector(".navmobile__dropdownnav");
const navcartIcon = document.querySelector(".navmobile__cart");
const cartPopup = document.querySelector(".cart__popup--orange");
const cartPopupamount = document.querySelector(".cart__popup--amount");
const sliderCart = document.querySelector(".slider__cart");
const sliderCarttext = document.querySelector(".cart__text");
const sliderCartorder = document.querySelector(".cart__order");
const sliderCartorderprice = document.querySelector(".cartproduct__orderprice");
const sliderCartorderspan = document.querySelector(
	".cartproduct__orderprice--bold"
);
const translucentBackground = document.querySelector(".navmobile__background");
const cartOrderdelete = document.querySelector(".cartproduct__deleteicon");
const navmenuClose = document.querySelector(".dropdownnav__closeicon");

let currentSlide = 1;
let priceIndex = 1;

navMenu.addEventListener("click", () => {
	console.log("hi");
	hideCart();
	showAnimation();
	translucentBackground.classList.remove("hidden");
});

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

const emptyCart = () => {
	sliderCarttext.classList.remove("hidden");
	sliderCartorder.classList.add("hidden");
};

const filledCart = () => {
	sliderCarttext.classList.add("hidden");
	sliderCartorder.classList.remove("hidden");
};

const showAnimation = () => {
	navMenuBar.classList.add("showanimation");
	navMenuBar.classList.remove("hideanimation");
};

const hideAnimation = () => {
	navMenuBar.classList.remove("showanimation");
	navMenuBar.classList.add("hideanimation");
};

const showOrder = () => {
	if (cartPopup.classList.contains("hidden")) emptyCart();
	if (!cartPopup.classList.contains("hidden")) filledCart();
};

const hideCart = () => {
	sliderCart.classList.add("hidden");
};

const toggleCart = () => {
	sliderCart.classList.toggle("hidden");
};

addtoCart.addEventListener("click", () => {
	cartPopupamount.textContent = +cartPopupamount.textContent + priceIndex;
	cartPopup.classList.remove("hidden");
	if (!sliderCart.classList.contains("hidden")) showOrder();
	sliderCartorderprice.innerHTML = `$125.00 x ${
		cartPopupamount.textContent
	} <span class="cartproduct__orderprice--bold">$${
		125 * cartPopupamount.textContent
	}</span>`;
});

navcartIcon.addEventListener("click", (e) => {
	if (!navMenuBar.classList.contains("showanimation")) {
		toggleCart();
		showOrder();
	}
	if (navMenuBar.classList.contains("showanimation")) {
		hideAnimation();
		if (sliderCart.classList.contains("hidden")) {
			showOrder();
			sliderCart.classList.remove("hidden");
		}
	}
});

cartOrderdelete.addEventListener("click", () => {
	hideAnimation();
	cartPopupamount.textContent = 0;
	cartPopup.classList.add("hidden");
	emptyCart();
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

navmenuClose.addEventListener("click", () => {
	hideAnimation();
	translucentBackground.classList.add("hidden");
});

document.body.addEventListener("click", (e) => {
	if (!sliderCart.classList.contains("hidden")) {
		if (
			!e.target.closest(".slider__cart") &&
			!e.target.closest(".navmobile__cart") &&
			!e.target.closest(".content__amountbtn")
		)
			hideCart();
	}
	if (navMenuBar.classList.contains("showanimation")) {
		if (
			!e.target.closest(".navmobile__dropdownnav") &&
			!e.target.closest(".navmobile__hamburger")
		) {
			hideAnimation();
			translucentBackground.classList.add("hidden");
		}
	}
});
