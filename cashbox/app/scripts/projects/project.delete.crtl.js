'use strict';

angular.module('cashbox').controller('ProjectDeleteCtrl',
  function ($scope, $modalInstance, projectName) {
    $scope.projectName = projectName;

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

    $scope.deleteProject = function () {
      $modalInstance.close();
    };
  });
