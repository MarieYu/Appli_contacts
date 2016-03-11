function FormView(contactDTO){
	Observable.call(this);
	this._model = contactDTO;
	this._listeners();
}

FormView.prototype = Object.create(Observable.prototype); // FormView extends Observable
FormView.prototype.constructor = FormView;


FormView.prototype._listeners = function(){
	this._valid = $('#valid');
	this._valid.on('click', function(){
		this.notify({type: 'VALID_CONTACT'});
	}.bind(this));

	this._addPhoto = $('#addPhoto');
	this._addPhoto.on('click', function(){
		this.notify({type: 'ADD_PHOTO'})
	});
};

FormView.prototype.update = function(){

};





};