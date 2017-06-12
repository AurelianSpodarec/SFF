
//////////////////////////////////////////////////
//
// Hamburger Menu
//  
//////////////////////////////////////////////////

	var navToggle = document.querySelector(".site-header__hamburger");
	var menuToggle = document.querySelector(".main-nav");

	navToggle.addEventListener('click', function() {

		navToggle.classList.toggle("is-active");
		menuToggle.classList.toggle("is-active");


	}, false);
	



//////////////////////////////////////////////////
//
// Slider
//  
//////////////////////////////////////////////////
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
	controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('.slider-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
	goToSlide(currentSlide+1);
}

function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'slider-item';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slider-item showing';
}




//////////////////////////////////////////////////
//
// Modal
//  
//////////////////////////////////////////////////
var btnModal = document.querySelector(".btn-modal");
var modalOverlay = document.createElement("div");
var modalBox = document.querySelector(".modal__box");
var modalClose = document.querySelector(".modal__closeButton");

modalOverlay.setAttribute("class", "modal-overlay");

btnModal.addEventListener('click', function() {
    document.body.appendChild(modalOverlay);
    modalOverlay.appendChild(modalBox).style.display="block";
});

// modalOverlay.addEventListener('click', function() {
//   this.parentNode.removeChild(this);
// });

modalClose.addEventListener('click', function() {
  modalOverlay.parentNode.removeChild(modalOverlay);
});

