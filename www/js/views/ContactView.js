function ContactView(contactModel){
	Observable.call(this);
	this._model = contactModel;
	this._listeners();
	$.mobile.navigate('#home');

}

ContactView.prototype = Object.create(Observable.prototype); // ContactView extends Observable
ContactView.prototype.constructor = ContactView;

ContactView.prototype._listeners = function(){
	// button add new contact
	this._addButton = $('#addButton');
	this._addButton.on('click', function(){
		this.notify({type: 'ADD_PRESS'});
	}.bind(this));

	// click on contact -> view details
	//TODO

	// click on Actions Modifier
	this._modif = $('#modify');
	this._modif.on('click', function(){
		$.mobile.navigate('#addContact');
		this.notify({type: 'MODIFY'})
	}.bind(this));

	// click on Actions Supprimer
	this._del = $('#delete');
	this._del.on('click', function(){

	}.bind(this));

	// click on A-Z button (sorting asc)
	this._ascButton = $('#sortAsc');
	this._ascButton.on('click', function(){
		this.notify({type: 'SORT_ASC'});
	}.bind(this));

	// click on Z-A button (sorting desc)
	this._descButton = $('#sortDesc');
	this._descButton.on('click', function(){
		this.notify({type: 'SORT_DESC'});
	}.bind(this));
};

ContactView.prototype.update = function(){

};

