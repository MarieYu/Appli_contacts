// ContactController.js

function ContactController(contactModel){
	this._model = contactModel;
	this._contacts = [];

}

ContactController.prototype.list = function(){
	return this._contacts;
};

ContactController.prototype.addContact = function(contact){
	this._contacts.push(contact);
};

ContactController.prototype.update = function(event){
	if(event.type === 'ADD_PRESS'){
		//ouvrir la page ajout de contact
		$.mobile.navigate('#addContact');
	}
};