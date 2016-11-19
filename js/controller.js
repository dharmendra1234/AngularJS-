module.controller('ContactController', function($scope, ContactListFactory, ContactService, ContactEditService) {
	$scope.saveContact = function() 
	 { //ContactService
		ContactService.save($scope.newcontact);
		$scope.newcontact = {};
	}
	$scope.delete1 = function(id) { //ContactService
		ContactService.delete1(id);
		if ($scope.newcontact.id == id)
			$scope.newcontact = {};
	}
	$scope.edit = function(id) { //ContactEditService
		$scope.newcontact = ContactEditService.editContact(id);
	}
	$scope.contacts = ContactListFactory.list(); //ContactListFactory

})
