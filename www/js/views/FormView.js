function FormView(contactModel){
	Observable.call(this);
	this._model = contactModel;
	this._createElements();
	this._listeners();
}

FormView.prototype._createElements = function(){
	var body = $(document.body);

	this._divPage =  $('<div data-role="page" id="addContact">');
	this._header = $('<header data-role="header">');
	this._title = $('<h1>Ajouter</h1>');
	this._divMain = $('<div data-role="main" class="ui-content">');
	this._lab1 = $('<label for="lastname">Nom : </label>');
	this._lab2 = $('<label for="firstname">Prénom : </label>');
	this._lab3 = $('<label for="phone">Tel : </label>');
	this._lab4 = $('<label for="email">Email : </label>');
	this._lab5 = $('<label for="birthDate">Date de naissance : </label>');
	this._lab6 = $('<label for="photo">Photo : </label>');
	this._input1 = $('<input type="text" name="lastname" id="lastname" value="">');
	this._input2 = $('<input type="text" name="firstname" id="firstname" value="">');
	this._input3 = $('<input type="text" name="phone" id="phone" value="">');
	this._input4 = $('<input type="email" name="email" id="email" value="">');
	this._input5 = $('<input type="date" name="birthDate" id="birthDate" value="">');
	this._addPhoto = $('<a href="" class="ui-btn">Photo</a>');
	this._valid = $('<input type="submit" value="valider">');

	this._header.append(this._title);
	this._divMain
		.append(this._lab1)
		.append(this._input1)
		.append(this._lab2)
		.append(this._input2)
		.append(this._lab3)
		.append(this._input3)
		.append(this._lab4)
		.append(this._input4)
		.append(this._lab5)
		.append(this._input5)
		.append(this._lab6)
		.append(this._addPhoto)
		.append(this._valid);
	this._divPage.append(this._divMain);

	};





	<div data-role="page" id="addContact">
            <header data-role="header">
                <a href="#home" class="ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-right"></a>
            </header>
            <div data-role="main" class="ui-content">
                <label for="lastname">Nom :</label>
                <input type="text" name="lastname" id="lastname" value"">
                <label for="firstname">Prénom :</label>
                <input type="text" name="firstname" id="firstname" value"">
                <label for="phone">Tel :</label>
                <input type="text" name="phone" id="phone" value"">
                <label for="email">Email :</label>
                <input type="email" name="email" id="email" value"">
                <label for="birthDate">Date de naissance :</label>
                <input type="text" name="birthDate" id="birthDate" value"">
                <label for="photo">Photo :</label>
                <a href="">Photo</a>
                <input type="submit" value="valider">
            </div>


        </div>

};