'use strict';

angular.module('cashbox').controller('ProjectEditCtrl',
  function ($scope, $modalInstance, $timeout, focus, project) {
    $scope.project = project || {};

    $timeout(function () {
      focus('project-name-field');
    });

    $scope.cancel = function () {
      $modalInstance.dismiss();
    };

    $scope.createProject = function () {
      $modalInstance.close($scope.project);
    };

    $scope.deleteProject = function () {
      $modalInstance.dismiss('delete');
    };

    $scope.isProjectSaved = function () {
      return $scope.project && $scope.project.id;
    };
  });
