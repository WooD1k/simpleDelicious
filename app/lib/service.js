var Parse = require("TiParse")();
var cakesModel = Alloy.Collections.cakesModel;

exports.getAllContent = function(args) {
	cakesModel.deleteAll();

	var cakes = Parse.Object.extend("cakes");
	var cakesItems = new Parse.Query(cakes);
	var cakesArray = [];
	cakesItems.find({
		success : function(cakes) {
			for (var i = 0; i < cakes.length; i++) {
				var cakeItem = Alloy.createModel('cakesModel', {
					cakeName : cakes[i].get("cakeName"),
					cakeShortDesc : cakes[i].get("cakeShortDesc"),
					cakeDesc : cakes[i].get("cakeDesc"),
					cakeSmallPicUrl : cakes[i].get("cakeSmallPicUrl"),
					cakePicUrl : cakes[i].get("cakePicUrl"),
					cakePrice : cakes[i].get("cakePrice")
				});

				cakesArray.push(cakeItem);
				cakeItem.save();
			};
			cakesModel.add(cakesArray);
			cakesModel.fetch();
			args.success();
		},
		error : function(object, error) {
			Ti.API.info('object: ' + JSON.stringify(object));
			Ti.API.info('error: ' + JSON.stringify(error));
			args.error();
		}
	});
};
