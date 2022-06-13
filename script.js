const activeSlide = document.querySelectorAll("[data-info=slider__mobile]");
const thumbnailImg = document.querySelectorAll("[data-info]");
const thumbnailSlider = document.querySelector(".slider__desktop");
const desktopImg = document.querySelector(".mobilemainimg");
const lightboxImg = document.querySelector(".backgroundmainimg");
const sliderLightbox = document.querySelector(".slider__background");
const lightboxClose = document.querySelector(".slider__backgroundbtn--close");
const nextBtn = document.querySelector(".slider__arrow--next");
const prevBtnLightbox = document.querySelector(
	".slider__backgroundbtn--previous"
);
const nextBtnLightbox = document.querySelector(".slider__backgroundbtn--next");
const prevBtn = document.querySelector(".slider__arrow--previous");
const plusBtn = document.querySelector(".slider__textsectionplusbtn");
const minusBtn = document.querySelector(".slider__textsectionminusbtn");
const discountPrice = document.querySelector(".slider__textsectionprice");
const originalPrice = document.querySelector(
	".slider__textsectionoriginalprice"
);
const amount = document.querySelector(".slider__textsectionquantity");
const addtoCart = document.querySelector(".slider__textsectionbtn--add");
const navMenu = document.querySelector(".nav__hamburger");
const navMenuBar = document.querySelector(".nav__dropdown");
const navcartIcon = document.querySelector(".nav__basket");
const cartPopup = document.querySelector(".nav__basketpopup--orange");
const cartPopupamount = document.querySelector(".nav__basketpopup--amount");
const sliderCart = document.querySelector(".nav__cart");
const sliderCarttext = document.querySelector(".nav__cartempty");
const sliderCartorder = document.querySelector(".nav__cartorder");
const sliderCartorderprice = document.querySelector(".nav__cartproductprice");
const sliderCartorderpricebold = document.querySelector(
	".nav__cartproductboldprice"
);
const translucentBackground = document.querySelector(".nav__background");
const cartOrderdelete = document.querySelector(".nav__cartproductdelete");
const navmenuClose = document.querySelector(".nav__dropdownclose");

let currentSlide = 1;
let priceIndex = 1;
let flag = true;
let imgId = 1;

activeSlide.forEach(
	(s, i) => (s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
);

moveSlider = () => {
	activeSlide.forEach(
		(s, i) =>
			(s.style.transform = `translateX(${(i - currentSlide) * 100}%)`)
	);
};

nextSlider = () => {
	currentSlide++;
	if (currentSlide >= 4) currentSlide = 0;
	moveSlider();
};

prevSlider = () => {
	currentSlide--;
	if (currentSlide == -1) currentSlide = 3;
	moveSlider();
};

// activeSlide.forEach((slide) => {
// 	slide.addEventListener("click", (event) => {
// 		imgId = event.target.dataset.info;
// 		if (flag) {
// 			desktopImg.src = `images/image-product-${imgId}.jpg`;
// 		}
// 		if (!flag) {
// 			lightboxImg.src = `images/image-product-${imgId}.jpg`;
// 		}
// 		event.target.classList.add("clicked");
// 		thumbnailImg.forEach((img) => {
// 			if (img.dataset.info !== imgId) {
// 				img.classList.remove("clicked");
// 			}
// 		});
// 	});
// });

nextBtn.addEventListener("click", nextSlider);

prevBtn.addEventListener("click", prevSlider);

// setPrices = () => {
// 	discountPrice.textContent = `${125 * amount.textContent}.00$`;
// 	originalPrice.textContent = `${250 * amount.textContent}.00$`;
// };

// emptyCart = () => {
// 	sliderCarttext.classList.remove("hidden");
// 	sliderCartorder.classList.add("hidden");
// };

// filledCart = () => {
// 	sliderCarttext.classList.add("hidden");
// 	sliderCartorder.classList.remove("hidden");
// };

// showAnimation = () => {
// 	navMenuBar.classList.add("showanimation");
// 	navMenuBar.classList.remove("hideanimation");
// };

// hideAnimation = () => {
// 	navMenuBar.classList.remove("showanimation");
// 	navMenuBar.classList.add("hideanimation");
// };

// showOrder = () => {
// 	if (cartPopup.classList.contains("hidden")) emptyCart();
// 	if (!cartPopup.classList.contains("hidden")) filledCart();
// };

// hideCart = () => {
// 	sliderCart.classList.add("hidden");
// };

// toggleCart = () => {
// 	sliderCart.classList.toggle("hidden");
// };

// addtoCart.addEventListener("click", () => {
// 	cartPopupamount.textContent = +cartPopupamount.textContent + priceIndex;
// 	cartPopup.classList.remove("hidden");
// 	if (!sliderCart.classList.contains("hidden")) showOrder();
// 	sliderCartorderprice.textContent = `$125.00 x ${cartPopupamount.textContent}`;
// 	sliderCartorderpricebold.textContent = `$${
// 		125 * cartPopupamount.textContent
// 	}`;
// });

// cartOrderdelete.addEventListener("click", () => {
// 	cartPopupamount.textContent = 0;
// 	cartPopup.classList.add("hidden");
// 	emptyCart();
// });

// plusBtn.addEventListener("click", () => {
// 	priceIndex++;
// 	amount.textContent++;
// 	setPrices();
// });

// minusBtn.addEventListener("click", () => {
// 	if (amount.textContent > 1) {
// 		priceIndex--;
// 		amount.textContent--;
// 		setPrices();
// 	}
// });

// navmenuClose.addEventListener("click", () => {
// 	hideAnimation();
// 	translucentBackground.classList.add("hidden");
// });

// navMenu.addEventListener("click", () => {
// 	hideCart();
// 	showAnimation();
// 	translucentBackground.classList.remove("hidden");
// });

// desktopImg.addEventListener("click", () => {
// 	sliderLightbox.classList.remove("hidden");
// 	flag = false;
// 	document.querySelector(`[data-info="${imgId}"]`).classList.add("clicked");
// 	lightboxImg.src = `images/image-product-${imgId}.jpg`;
// });

// lightboxClose.addEventListener("click", () => {
// 	sliderLightbox.classList.add("hidden");
// 	flag = true;
// 	thumbnailImg.forEach((img) => {
// 		img.classList.remove("clicked");
// 	});
// 	console.log("Hi");
// 	imgId = 1;
// });

// sliderLightbox.addEventListener("click", (e) => {
// 	if (e.target == e.currentTarget) sliderLightbox.classList.add("hidden");
// 	flag = true;
// });

// prevBtnLightbox.addEventListener("click", () => {
// 	imgId--;
// 	if (imgId == 0) imgId = 4;
// 	document.querySelector(`[data-info="${imgId}"]`).classList.add("clicked");
// 	thumbnailImg.forEach((img) => {
// 		if (img.dataset.info != imgId) {
// 			img.classList.remove("clicked");
// 		}
// 	});
// 	lightboxImg.src = `images/image-product-${imgId}.jpg`;
// });

// nextBtnLightbox.addEventListener("click", () => {
// 	imgId++;
// 	if (imgId > 4) imgId = 1;
// 	document.querySelector(`[data-info="${imgId}"]`).classList.add("clicked");
// 	thumbnailImg.forEach((img) => {
// 		if (img.dataset.info != imgId) {
// 			img.classList.remove("clicked");
// 		}
// 	});
// 	lightboxImg.src = `images/image-product-${imgId}.jpg`;
// });

// if (window.outerWidth < 500) {
// 	activeSlide.forEach((s, i) => {
// 		s.style.transform = `translateX(${100 * i}%)`;
// 	});
// }

// document.body.addEventListener("click", (e) => {
// 	if (!sliderCart.classList.contains("hidden")) {
// 		if (
// 			!e.target.closest(".nav__cart") &&
// 			!e.target.closest(".nav__basket") &&
// 			!e.target.closest(".content__amountbtn")
// 		)
// 			hideCart();
// 	}
// 	if (navMenuBar.classList.contains("showanimation")) {
// 		if (
// 			!e.target.closest(".nav__dropdownnav") &&
// 			!e.target.closest(".nav__hamburger")
// 		) {
// 			hideAnimation();
// 			translucentBackground.classList.add("hidden");
// 		}
// 	}
// });

// navcartIcon.addEventListener("click", (e) => {
// 	if (!navMenuBar.classList.contains("showanimation")) {
// 		toggleCart();
// 		showOrder();
// 	}
// 	if (navMenuBar.classList.contains("showanimation")) {
// 		hideAnimation();
// 		if (sliderCart.classList.contains("hidden")) {
// 			showOrder();
// 			sliderCart.classList.remove("hidden");
// 		}
// 	}
// });
