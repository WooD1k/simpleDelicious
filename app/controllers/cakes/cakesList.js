var args = arguments[0] || {};
var Parse = require("TiParse")();
var cakesModel = Alloy.Collections.cakesModel;
cakesModel.fetch();

function doSelectItem(e) {
	Ti.API.info('item clicked: ' + JSON.stringify(e));
	var item = e.section.getItemAt(e.itemIndex);
	Ti.API.info('item: ' + JSON.stringify(item));
}

function dataTransformFunction(model) {
	var transform = model.toJSON();
	transform.item = '[' + transform.item + ']';
	return transform;
}
