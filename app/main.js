(function(app) {
	document.addEventListener('DOMContentLoaded', function() {
		ng.platformBrowserDynamic
			.platformBrowserDynamic()
			.bootstrapModule(app.BlogModule);
	});
})(window.app || (window.app = {}));
