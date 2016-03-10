function ContactView(contactModel){
	Observable.call(this);
	this._model = contactModel;
	this._createElements();
	this._listeners();
	$.mobile.navigate('#home');

}

ContactView.prototype = Object.create(Observable.prototype); // ContactView extends Observable
ContactView.prototype.constructor = ContactView;

// ContactView.prototype._createElements = function(){
// 	this._divPage = $('<div data-role="page" id="home">');
// 	this._header = $('<header data-role="header">');
// 	this._title = $('<h1>Contacts</h1>');
// 	this._addButton = $('<a href="" class="ui-btn ui-btn-inline ui-icon-plus ui-btn-icon-left">Ajouter</a>');
// 	this._divMain = $('<div data-role="main" class="ui-content">')
// 	this._footer = $('<footer data-role="footer" data-position="fixed">');
// 	this._hFooter = $('<h1>Imie</h1>');

// 	this._header
// 		.append(this._title)
// 		.append(this._addButton);

// 	this._footer.append(this._hFooter);
// 	this._divPage
// 		.append(this._header)
// 		.append(this._divMain)
// 		.append(this._footer);
// 	$('body').append(this._divPage);

// };

ContactView.prototype._listeners = function(){
	this._addButton.on('click', function(){
		this.notify({type: 'ADD_PRESS'});
	}.bind(this));
};

ContactView.prototype.update = function(){

};