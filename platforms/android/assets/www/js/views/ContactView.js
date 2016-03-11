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
	

};

ContactView.prototype.update = function(){

};

