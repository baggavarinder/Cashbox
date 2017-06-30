'use strict';

angular.module('cashbox').controller('AccountEditCtrl',
  function ($scope, $modalInstance, $timeout, focus, account, Accounts) {
    $scope.account = account || {};

    $timeout(function () {
      focus('account-name-field');
    });
    
    // fetch all account types
    Accounts.getTypes().$promise.then(function(response) {
		$scope.accountTypes = response;
	});

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

    $scope.createAccount = function () {
      $modalInstance.close($scope.account);
    };

    $scope.deleteAccount = function () {
      $modalInstance.dismiss('delete');
    };

    $scope.isAccountSaved = function () {
      return $scope.account && $scope.account.id;
    };
  });
