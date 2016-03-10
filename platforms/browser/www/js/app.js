document.addEventListener('deviceready', function(){

	var contactModel = new Contact();
	var contactView = new ContactView(contactModel);
	var contactCtrl = new ContactController(contactModel);

	var formView = new FormView();


	contactView.addObserver(contactCtrl);
	contactModel.addObserver(contactView);
});
