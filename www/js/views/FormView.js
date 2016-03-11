function FormView(contactModel, contactDTO){
	Observable.call(this);
	this._model = contactModel;
	this._contactDTO = contactDTO;
	this._listeners();
}

FormView.prototype = Object.create(Observable.prototype); // FormView extends Observable
FormView.prototype.constructor = FormView;


FormView.prototype._listeners = function(e){
	this._valid = $('#valid');
	this._valid.on('click', function(){
		e.preventDefault();
		this.notify({type: 'VALID_CONTACT'});
	}.bind(this));

	this._addPhoto = $('#addPhoto');
	this._addPhoto.on('click', function(){
		this.notify({type: 'ADD_PHOTO'})
	});
};

FormView.prototype.preview = function(){
	this._lastname = $('#lastname');
	this._firstname = $('#_firstname');
	this._phone = $('#phone');
	this._email = $('#email');
	this._birthDate = $('#birthDate');
	this._lastname.val(this._contactDTO.getLastname());
	this._firstname.val(this._contactDTO.getFirstname());
	this._phone.val(this._contactDTO.getTel());
	this._email.val(this._contactDTO.getEmail());
	this._birthDate.val(this._contactDTO.getBirthDate());
};

FormView.prototype.update = function(event){
	if(event.type === 'MODIFY'){
		this.preview();
	}
};





};