// ContactController.js

function ContactController(contactDAO){
	this._contactDAO = contactDAO;
}


ContactController.prototype.update = function(event){
	if(event.type === 'ADD_PRESS'){
		//ouvrir la page ajout de contact
		$.mobile.navigate('#addContact');
	}

	if(event.type === 'SORT_ASC'){
		this._contactDAO.sortAscContact()
	}
	if(event.type === 'SORT_DESC'){
		this._contactDAO.sortDescContact()
	}
};