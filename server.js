var app = angular.module('myApp', [])
.controller('myctrl', function ($scope, $http) {
	//$scope.abc = {};
	//$scope.profileID = "";
	$scope.toastMessage = "";
	//alert('Done');
	$scope.submit = function () {
		var saveDetail = {
			'name': $scope.name,
			'email': $scope.email,
			'contactNum': $scope.contactNumber,
			'message': $scope.message			
		};
		// console.log(saveDetail);
		$http.post("http://localhost:8000/api/saveRetailerDetails" , saveDetail).success(function (response) {
			// console.log(response);
			if (response.status===201) { 
				$scope.toastMessage = "Details successfully saved,We will get back to you soon.";
				angular.element('#successMsg').stop().slideDown(1000).delay(1500).fadeOut(1000);
				//$scope.contactForm.$setPristine();				
				contactForm.reset();
					$scope.contactForm.$pristine = true;
				$scope.contactForm.$submitted = false;
			}
			});
	};	
});

