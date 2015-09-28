// app.js
(function() {
	'use strict';

	/*eslint no-use-before-define: [2, "nofunc"]*/

	angular
	.module('fdbapp', ['ngResource']);

	angular
	.module('fdbapp')
	.controller('mainCtrl', mainCtrl)
	.controller('zoomCtrl', zoomCtrl);

	mainCtrl.$inject = ['$http', '$templateCache'];
	zoomCtrl.$inject = ['$http', '$templateCache'];

	function mainCtrl($http, $templateCache) {
		/* jshint validthis: true */
		var model = this;
		model.test = 'test';
		model.method = 'JSONP';
		model.url = 'https://openagenda.com/agendas/61400181/events.json?page=1&search%5Bpassed%5D=1&callback=JSON_CALLBACK';

		$http({method: model.method, url: model.url, cache: $templateCache}).
        then(function(response) {
          model.status = response.status;
          model.data = response.data;
        }, function(response) {
          model.data = response.data || 'Request failed';
          model.status = response.status;
      });

	}

	function zoomCtrl($http, $templateCache) {
		/* jshint validthis: true */
		var model = this;
		model.test = 'test';
		model.method = 'JSONP';
		model.url = 'https://openagenda.com/agendas/61400181/events.json?page=1&search%5Bcategory%5D=zoom&callback=JSON_CALLBACK';

		$http({method: model.method, url: model.url, cache: $templateCache}).
        then(function(response) {
          model.status = response.status;
          model.data = response.data;
        }, function(response) {
          model.data = response.data || 'Request failed';
          model.status = response.status;
      });

	}

})();
