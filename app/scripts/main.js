// app.js
(function() {
	'use strict';

	/*eslint no-use-before-define: [2, "nofunc"]*/

	angular
	.module('fdbapp', ['ngResource', 'ngSanitize']);

	angular
	.module('fdbapp')
	.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

	angular
	.module('fdbapp')
	.controller('mainCtrl', mainCtrl)
	.controller('adminCtrl', adminCtrl);

	mainCtrl.$inject = ['$http', '$templateCache'];
	adminCtrl.$inject = ['$http'];

	function mainCtrl($http, $templateCache) {
		/* jshint validthis: true */
		var model = this;
		model.test = 'test';
		model.method = 'JSONP';
		model.url = 'https://openagenda.com/agendas/61400181/events.json?page=1&search[passed]=1&callback=JSON_CALLBACK';

		model.searchText = "rechercher un évènement"

		$http({method: model.method, url: model.url, cache: $templateCache}).
        then(function(response) {
          model.status = response.status;
          model.data = response.data;
        }, function(response) {
          model.data = response.data || 'Request failed';
          model.status = response.status;
      });

	}

	function adminCtrl($http) {
		/* jshint validthis: true */
		var model = this;
		model.method = 'GET';
		model.url = 'contenu.json';
		model.regions = '';

		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

		$http({
			method: model.method, 
			url: model.url
		})
			.then(function(response) {
          model.status = response.status;
          model.data = response.data;
        }, function(response) {
          model.data = response.data || 'Request failed';
          model.status = response.status;
      });

    var editor;

		// Initialise the editor
		editor = new ContentTools.EditorApp.get()
		editor.init('*[data-editable]', 'data-name');

		// Bind a function on editor save
    editor.bind('save', function(regions, autoSave){

        model.regions = regions;

        // "regions" contains all the html for each editable regions
        // Now, "regions" can be saved and used as needed.

				$http.post('contenu.json', regions, {headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
					.success(function (data, response) {
            console.log("Success" + data + response);
        })
        	.error(function (data, status, headers, config) {
            console.log(data, status, headers, config);
        });

    })

		

	}

})();
