exports.definition = {
	config : {
		columns : {
			id : "integer PRIMARY KEY AUTOINCREMENT",
			cakeName : "text",
			cakeShortDesc : "text",
			cakeDesc : "text",
			cakeSmallPicUrl : "text",
			cakePicUrl : "text",
			cakePrice : "text"
		},
		adapter : {
			type : "sql",
			collection_name : "cakesModel",
			idAttribute : "id"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {

		});
		// end extend

		return Model;
	},

	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {

			deleteAll : function() {
				var collection = this;

				var sql = "DELETE FROM " + collection.config.adapter.collection_name;
				db = Ti.Database.open(collection.config.adapter.db_name);
				db.execute(sql);
				db.close();

				collection.fetch();
				collection.trigger('sync');
			}
		});

		return Collection;
	}
};
