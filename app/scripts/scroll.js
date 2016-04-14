(function() {
	'use strict';
	/*global ScrollMagic:true*/
	/*eslint no-undef: 2*/
	/*eslint no-unused-vars: 2*/
	var controller = new ScrollMagic.Controller();
	var reseaux = new ScrollMagic.Scene({
		triggerElement: '#triggerReseaux',
		triggerHook: 'onLeave'
	})
	.setClassToggle('#reseaux', 'fix');

	// Add Scene to ScrollMagic Controller
	controller.addScene(reseaux);

})();
