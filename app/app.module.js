(function(app) {
	app.BlogModule =
		ng.core.NgModule({
			imports: [ ng.platformBrowser.BrowserModule, ng.http.HttpModule ],
			declarations: [ app.BlogComponent ],
			bootstrap: [ app.BlogComponent ]
		})
		.Class({
			constructor: function() {}
		});
})(window.app || (window.app = {}));