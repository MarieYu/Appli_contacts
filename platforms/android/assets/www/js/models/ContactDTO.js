// ContactDTO.js

function ContactDTO(){
	Observable.call(this);
	this._lastname;
	this._firstname;
	this._tel;
	this._email;
	this._birthDate;

}

ContactDTO.prototype = Object.create(Observable.prototype); // ContactDTO extends Observable
ContactDTO.prototype.constructor = ContactDTO;


ContactDTO.prototype.getLastname = function(){
	return this._lastname;
};

ContactDTO.prototype.getFirstname = function(){
	return this._firstname;
};

ContactDTO.prototype.getTel = function(){
	return this._tel;
};

ContactDTO.prototype.getEmail = function(){
	return this._email;
};

ContactDTO.prototype.getBirthDate = function(){
	return this._birthDate;
};

ContactDTO.prototype.setLastname = function(lastname){
	this._lastname = lastname;
	return this;
};

ContactDTO.prototype.setFirstname = function(firstname){
	this._firstname = firstname;
	return this;
};

ContactDTO.prototype.setTel = function(tel){
	this._tel = tel;
	return this;
};

ContactDTO.prototype.setEmail = function(email){
	this._email = email;
	return this;
};

ContactDTO.prototype.setBirthDate = function(birthDate){
	this._birthDate = birthDate;
	return this;
};