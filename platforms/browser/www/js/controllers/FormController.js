// FormController.js

function FormController(contactDAO){
	this._contactDAO = contactDAO;

}

FormController.prototype.update = function(event){
	switch(event.type){
		case 'VALID_CONTACT':
			this._contactDAO.addContact();
		break;
		case 'ADD_PHOTO':
			this.contactDAO.addPhoto();	 		
		break;
};