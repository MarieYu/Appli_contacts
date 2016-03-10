// Contact.js

function Contact(){
	Observable.call(this);
}

Contact.prototype = Object.create(Observable.prototype); // Contact extends Observable
Contact.prototype.constructor = Contact;

