document.addEventListener('deviceready', function(){

	
	var contactModel = new ContactDAO();
	var contactView = new ContactView(contactModel);
	var contactCtrl = new ContactController(contactModel);

	// var formView = new FormView(contactModel);


	contactView.addObserver(contactCtrl);
	contactModel.addObserver(contactView);

});
