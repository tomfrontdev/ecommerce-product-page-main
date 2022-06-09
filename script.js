const activeSlide = document.querySelectorAll(".slider__img.active");
const thumbnailImg = document.querySelectorAll("[data-info]");
const thumbnailSlider = document.querySelector(".slider__desktop");
const desktopImg = document.querySelector(".hi");
const lightboxImg = document.querySelector(".ho");
const sliderLightbox = document.querySelector(".slider__background");
const lightboxClose = document.querySelector(".content__button--close");
const nextBtn = document.querySelector(".slider__icon--next");
const prevBtnLightbox = document.querySelector(".content__button--previous");
const nextBtnLightbox = document.querySelector(".content__button--next");
const prevBtn = document.querySelector(".slider__icon--previous");
const plusBtn = document.querySelector(".amount__btn--plus");
const minusBtn = document.querySelector(".amount__btn--minus");
const discountPrice = document.querySelector(".price__amount--discountedprice");
const originalPrice = document.querySelector(".price__amount--originalprice");
const amount = document.querySelector(".amount__number");
const addtoCart = document.querySelector(".quantity__div--addtoCart");
const navMenu = document.querySelector(".nav__hamburger");
const navMenuBar = document.querySelector(".nav__dropdownnav");
const navcartIcon = document.querySelector(".nav__cart");
const cartPopup = document.querySelector(".cart__popup--orange");
const cartPopupamount = document.querySelector(".cart__popup--amount");
const sliderCart = document.querySelector(".slider__cart");
const sliderCarttext = document.querySelector(".cart__text");
const sliderCartorder = document.querySelector(".cart__order");
const sliderCartorderprice = document.querySelector(".cartproduct__orderprice");
const sliderCartorderspan = document.querySelector(
	".cartproduct__orderprice--bold"
);
const translucentBackground = document.querySelector(".nav__background");
const cartOrderdelete = document.querySelector(".cartproduct__deleteicon");
const navmenuClose = document.querySelector(".dropdownnav__closeicon");

let currentSlide = 1;
let priceIndex = 1;
let flag = true;
let imgId = 1;

showMobileCart = () => {
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
};

switchImg = () => {
	document.querySelector(`[data-info="${imgId}"]`).classList.add("clicked");
	thumbnailImg.forEach((img) => {
		if (img.dataset.info != imgId) {
			img.classList.remove("clicked");
		}
	});
	lightboxImg.src = `images/image-product-${imgId}.jpg`;
};

moveSlider = () => {
	activeSlide.forEach(
		(s, i) =>
			(s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
	);
};

nextSlider = () => {
	moveSlider();
	currentSlide++;
	if (currentSlide >= 4) currentSlide = 0;
};

prevSlider = () => {
	moveSlider();
	currentSlide--;
	if (currentSlide == -1) currentSlide = 3;
};

setPrices = () => {
	discountPrice.textContent = `${125 * amount.textContent}.00$`;
	originalPrice.textContent = `${250 * amount.textContent}.00$`;
};

emptyCart = () => {
	sliderCarttext.classList.remove("hidden");
	sliderCartorder.classList.add("hidden");
};

filledCart = () => {
	sliderCarttext.classList.add("hidden");
	sliderCartorder.classList.remove("hidden");
};

showAnimation = () => {
	navMenuBar.classList.add("showanimation");
	navMenuBar.classList.remove("hideanimation");
};

hideAnimation = () => {
	navMenuBar.classList.remove("showanimation");
	navMenuBar.classList.add("hideanimation");
};

showOrder = () => {
	if (cartPopup.classList.contains("hidden")) emptyCart();
	if (!cartPopup.classList.contains("hidden")) filledCart();
};

hideCart = () => {
	sliderCart.classList.add("hidden");
};

toggleCart = () => {
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

cartOrderdelete.addEventListener("click", () => {
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

navMenu.addEventListener("click", () => {
	hideCart();
	showAnimation();
	translucentBackground.classList.remove("hidden");
});

desktopImg.addEventListener("click", () => {
	sliderLightbox.classList.remove("hidden");
	flag = false;
	document.querySelector(`[data-info="${imgId}"]`).classList.add("clicked");
	lightboxImg.src = `images/image-product-${imgId}.jpg`;
});

lightboxClose.addEventListener("click", () => {
	sliderLightbox.classList.add("hidden");
	flag = true;
	thumbnailImg.forEach((img) => {
		img.classList.remove("clicked");
	});
	imgId = 1;
});

prevBtnLightbox.addEventListener("click", () => {
	imgId--;
	if (imgId == 0) imgId = 4;
	switchImg();
});

nextBtnLightbox.addEventListener("click", () => {
	imgId++;
	if (imgId > 4) imgId = 1;
	switchImg();
});

if (window.outerWidth < 500) {
	activeSlide.forEach((s, i) => {
		s.style.transform = `translateX(${100 * i}%)`;
	});
	showMobileCart();
}

if (window.outerWidth > 500) {
	activeSlide.forEach((slide) => {
		slide.addEventListener("click", (event) => {
			imgId = event.target.dataset.info;
			if (flag) {
				desktopImg.src = `images/image-product-${imgId}.jpg`;
			}
			if (!flag) {
				lightboxImg.src = `images/image-product-${imgId}.jpg`;
			}
			event.target.classList.add("clicked");
			thumbnailImg.forEach((img) => {
				if (img.dataset.info !== imgId) {
					img.classList.remove("clicked");
				}
			});
		});
	});
}

document.body.addEventListener("click", (e) => {
	if (!sliderCart.classList.contains("hidden")) {
		if (
			!e.target.closest(".slider__cart") &&
			!e.target.closest(".nav__cart") &&
			!e.target.closest(".content__amountbtn")
		)
			hideCart();
	}
	if (navMenuBar.classList.contains("showanimation")) {
		if (
			!e.target.closest(".nav__dropdownnav") &&
			!e.target.closest(".nav__hamburger")
		) {
			hideAnimation();
			translucentBackground.classList.add("hidden");
		}
	}
});
