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


	var datakeys1 = new ScrollMagic.Scene({
		triggerElement: '#triggerData1',
		triggerHook: 'onEnter',
		offset: 200,
		reverse: false
	})
	.setClassToggle('.display1', 'jello');

	var datakeys2 = new ScrollMagic.Scene({
		triggerElement: '#triggerData2',
		triggerHook: 'onEnter',
		offset: 200,
		reverse: false
	})
	.setClassToggle('.display2', 'jello');

	var datakeys = new ScrollMagic.Scene({
		triggerElement: '#triggerData1',
		triggerHook: 'onEnter',
		offset: 200,
		reverse: false
	})
	.setClassToggle('.key', 'on');

	// Add Scene to ScrollMagic Controller
	controller.addScene(reseaux);
	controller.addScene(datakeys1);
	controller.addScene(datakeys2);
	controller.addScene(datakeys);

})();
