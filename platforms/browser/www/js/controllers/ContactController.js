// ContactController.js

function ContactController(contactDAO){
	this._contactDAO = contactDAO;
}


ContactController.prototype.update = function(event){
	switch(event.type){
		case 'ADD_PRESS':
			//open page add contact
			$.mobile.navigate('#addContact');
		break;
		 
		case 'SORT_ASC':
			this._contactDAO.sortAscContact();
		break;
		case 'SORT_DESC':
			this._contactDAO.sortDescContact();
		break;
	}
};