
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
	
