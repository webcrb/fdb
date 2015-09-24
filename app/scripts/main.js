// app.js
(function() {
	'use strict';

	/*eslint no-use-before-define: [2, "nofunc"]*/

	angular
	.module('fdbapp', ['ngResource']);

	angular
	.module('fdbapp')
	.controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$http'];

	function config() {

  }

	function mainCtrl($http) {
		/* jshint validthis: true */
		var model = this;
		model.test = 'test';

		$http.get('https://openagenda.com/agendas/69113667/events.json?page=1&search[passed]=1')
		  .success(function(data) {
	    	model.prog = data;
	    })
	    .error(function(data, status) {
		  	console.error('Repos error', status, data);
		});

	}

})();
