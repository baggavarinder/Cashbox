'use strict';

angular.module('cashbox').controller('AccountDeleteCtrl',
  function ($scope, $modalInstance, accountName) {
    $scope.accountName = accountName;

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

    $scope.deleteAccount = function () {
      $modalInstance.close();
    };
  });
