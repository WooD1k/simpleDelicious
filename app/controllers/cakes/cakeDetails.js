var args = arguments[0] || {};

$.cakeName.text = args.name;
$.cakeDesc.text = args.desc;
$.image.image = args.picUrl;

function doPlaceOrder () {
	alert("placeOrder");
}
