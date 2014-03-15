var args = arguments[0] || {};
var Parse = require("TiParse")();
var cakesModel = Alloy.Collections.cakesModel;
cakesModel.fetch();

function getCakes(argument) {

}

function dataTransformFunction(model) {
	var transform = model.toJSON();
	transform.item = '[' + transform.item + ']';
	return transform;
}
