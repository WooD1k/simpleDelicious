var Parse = require("TiParse")();
var cakesModel = Alloy.Collections.cakesModel;

cakesModel.deleteAll();

var cakes = Parse.Object.extend("cakes");
var cakesItems = new Parse.Query(cakes);
cakesItems.find({
	success : function(cakes) {
		for (var i = 0; i < cakes.length; i++) {
			var cakeItem = Alloy.createModel('cakesModel', {
				cakeName : cakes[i].get("cakeName"),
				cakeShortDesc : cakes[i].get("cakeShortDesc"),
				cakeDesc : cakes[i].get("cakeDesc"),
				cakeSmallPicUrl : cakes[i].get("cakeSmallPicUrl"),
				cakePicUrl : cakes[i].get("cakePicUrl"),
				cakeScakePricemallPicUrl : cakes[i].get("cakePrice")
			});

			cakesModel.add(cakeItem);
			cakeItem.save();
			cakesModel.fetch();
		};

		var wnd = Alloy.createController('cakes/cakesList');
		wnd.getView().open();
	},
	error : function(object, error) {
		Ti.API.info('object: ' + JSON.stringify(object));
		Ti.API.info('error: ' + JSON.stringify(error));
	}
});

