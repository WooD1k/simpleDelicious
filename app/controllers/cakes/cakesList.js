var args = arguments[0] || {};
var Parse = require("TiParse")();
var service = require('service');
var cakesModel = Alloy.Collections.cakesModel;
cakesModel.fetch();

function doSelectItem(e) {

}

function dataTransformFunction(model) {
	var transform = model.toJSON();
	transform.item = '[' + transform.item + ']';
	return transform;
}

function doPull () {
	$.pullLabel.textid = "ReleaseToRefreshTitile";
}

function doPullEnd () {
	$.pullLabel.textid = "PullToRefreshTitile";

	service.getAllContent({
		success: function() {

		},
		error: function() {

		}
	});
}

function doItemClick (e) {
	var item = e.section.getItemAt(e.itemIndex);

	var ctrl = Alloy.createController("cakes/cakeDetails", {
		name: item.cakeName.text,
		shortDesc: item.cakeShortDesc.text,
		picUrl: item.cakeImage.image,
		desc: item.cakeDesc.cakeDesc,

		price: item.cakePrice.cakePrice
	});

	var wnd = ctrl.getView();

	Alloy.Globals.navWnd = $.cakesList;
	Alloy.Globals.navWnd.openWindow(wnd);
}
