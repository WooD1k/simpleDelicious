var Parse = require("TiParse")();
var service = require('service');
var cakesModel = Alloy.Collections.cakesModel;
cakesModel.deleteAll();

service.getAllContent({
	success: function() {
		var wnd = Alloy.createController('cakes/cakesList');
		wnd.getView().open();
	},
	error: function() {

	}
});
