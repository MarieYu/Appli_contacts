// ContactDAO.js

function ContactDAO(contact){
	Observable.call(this);
	this._selectedContact = contact;//one contact selected

	var data = localStorage.getItem('contacts');
	this._contacts = data ? JSON.parse(data) : [];

}

ContactDAO.prototype = Object.create(Observable.prototype); // ContactDAO extends Observable
ContactDAO.prototype.constructor = ContactDAO;


ContactDAO.prototype.addContact = function(contact){
	this._contacts.push(contact);
	//persist in LocaleStorage (navigator)
	localStorage.setItem('contacts', JSON.stringify(this._contacts));
	//Emit event to view
	this.notify({type: 'MODIFY_CONTACTS'});
};

ContactDAO.prototype.addPhoto = function(){
	var buttonPhoto = $('#addPhoto');
    var img = $('#photoContact');


    buttonPhoto.on('click', function(e){
        navigator.camera.getPicture(function (imageData) {
            img.src = "data:image/jpeg;base64," + imageData;
        }, function (message) {
            alert('Failed because: ' + message);
        }, 
        { 
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

	});
};

ContactDAO.prototype.removeContact = function(id){
  	this._contacts.splice(id, 1);
	localStorage.setItem('contacts', JSON.stringify(this._contacts));
  	//Emit event to view
  	this.notify({type: 'MODIFY_CONTACTS'});

};

ContactDAO.prototype.updateContact = function(contact, id){
	this._contacts[id].push(contact);
	this.notify({type: 'MODIFY_CONTACTS'});
};

ContactDAO.prototype.getAllContacts = function(){
	return this._contacts;
};

ContactDAO.prototype.selectContact = function(id){
	this._selectedContact = this._contacts[id]
	
};	

ContactDAO.prototype.sortAscContact = function(){
	this.notify({type: 'MODIFY_CONTACTS'});
	return this._contacts.sort();
};

ContactDAO.prototype.sortDescContact = function(){
	this.notify({type: 'MODIFY_CONTACTS'});
	return this._contacts.reverse();
};
