module.factory('ContactListFactory', function(ContactService) {
	return {
		list : function() {
			return ContactService.list();
		}

	}
});

module.service('ContactEditService', function(ContactService) {
	this.editContact = function(id) {
		return angular.copy(ContactService.get(id));
	}

});

module.service('ContactService', function() {
	var contacts = [ {
		id : 0,
		'name' : 'Dharmendra',
		'email' : 'dharmendra.pawar@gmail.com',
		'phone' : '111-222-333'
	} ], uid = 1;
	this.save = function(contact) {
		if (contact.id == null) {
			contact.id = uid++;
			contacts.push(contact);
		} else {
			for (i in contacts) {
				if (contacts[i].id == contact.id) {
					contacts[i] = contact;
				}
			}
		}
	}

	this.get = function(id) {
		alert('test')
		alert('id')
		for (i in contacts) {
			if (contacts[i].id == id) {
				return contacts[i];
			}
		}
	}

	this.delete1 = function(id) {
		for (i in contacts) {
			if (contacts[i].id == id) {
				contacts.splice(i, 1);
			}
		}
	}

	this.list = function() {
		return contacts;
	}
});