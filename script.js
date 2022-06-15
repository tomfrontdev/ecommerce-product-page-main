const activeSlide = document.querySelectorAll(".slider__mobileimg");
const thumbnailDesktop = document.querySelectorAll(".slider__desktopthumbnail");
const thumbnailDesktopimg = document.querySelectorAll("[data-desktop]");
const thumbnailLightbox = document.querySelectorAll(
	".slider__lightboxthumbnail"
);
const thumbnailLightboximg = document.querySelectorAll("[data-lightbox]");
const desktopImg = document.querySelector(".slider__maindesktop");
const lightboxImg = document.querySelector(".slider__lightboxmain");
const sliderLightbox = document.querySelector(".slider__lightbox");
const lightboxClose = document.querySelector(".slider__lightboxbtn--close");
const nextBtn = document.querySelector(".slider__arrow--next");
const prevBtnLightbox = document.querySelector(
	".slider__lightboxbtn--previous"
);
const nextBtnLightbox = document.querySelector(".slider__lightboxbtn--next");
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
const sliderCartorderpricebold = document.querySelector(".nav__cartproductsum");
const translucentBackground = document.querySelector(".nav__lightbox");
const cartOrderdelete = document.querySelector(".nav__cartproductdeletebtn");
const navmenuClose = document.querySelector(".nav__dropdownclosebtn");

let currentSlide = 1;
let priceIndex = 1;
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

switchimgLightbox = (imgId) => {
	document
		.querySelector(`[data-lightbox="${imgId}"]`)
		.classList.add("active");
	thumbnailLightboximg.forEach((img) => {
		if (img.dataset.lightbox != imgId) {
			img.classList.remove("active");
		}
	});
	lightboxImg.src = `images/image-product-${imgId}.jpg`;
};

thumbnailLightbox.forEach((slide) => {
	slide.addEventListener("click", (event) => {
		imgId = event.target.dataset.lightbox;
		event.target.classList.add("active");
		switchimgLightbox(imgId);
	});
});

switchimgDesktop = (imgId) => {
	thumbnailDesktopimg.forEach((img) => {
		if (img.dataset.desktop != imgId) {
			img.classList.remove("active");
		}
	});
	desktopImg.src = `images/image-product-${imgId}.jpg`;
};

thumbnailDesktop.forEach((slide) => {
	slide.addEventListener("click", (event) => {
		imgId = event.target.dataset.desktop;
		event.target.classList.add("active");
		switchimgDesktop(imgId);
	});
});

nextBtnLightbox.addEventListener("click", () => {
	imgId++;
	if (imgId > 4) imgId = 1;
	switchimgLightbox(imgId);
});

prevBtnLightbox.addEventListener("click", () => {
	imgId--;
	if (imgId == 0) imgId = 4;
	switchimgLightbox(imgId);
});

nextBtn.addEventListener("click", nextSlider);

prevBtn.addEventListener("click", prevSlider);

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
	sliderCartorderprice.textContent = `$125.00 x ${cartPopupamount.textContent}`;
	sliderCartorderpricebold.textContent = `$${
		125 * cartPopupamount.textContent
	}`;
});

cartOrderdelete.addEventListener("click", () => {
	cartPopupamount.textContent = 0;
	cartPopup.classList.add("hidden");
	emptyCart();
});

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
	switchimgLightbox(imgId);
});

lightboxClose.addEventListener("click", () => {
	sliderLightbox.classList.add("hidden");
	thumbnailDesktop.forEach((img) => {
		img.classList.remove("active");
	});
	console.log("Hi");
	imgId = 1;
});

sliderLightbox.addEventListener("click", (e) => {
	if (e.target == e.currentTarget) sliderLightbox.classList.add("hidden");
});

document.body.addEventListener("click", (e) => {
	if (!sliderCart.classList.contains("hidden")) {
		if (
			!e.target.closest(".nav__cart") &&
			!e.target.closest(".nav__basket") &&
			!e.target.closest(".slider__textsectionbuttons")
		)
			hideCart();
	}
	if (navMenuBar.classList.contains("showanimation")) {
		if (
			!e.target.closest(".nav__dropdown") &&
			!e.target.closest(".nav__hamburger")
		) {
			hideAnimation();
			translucentBackground.classList.add("hidden");
		}
	}
});

navcartIcon.addEventListener("click", () => {
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
