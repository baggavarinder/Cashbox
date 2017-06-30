'use strict';

angular.module('cashbox')
  .directive('cbAccountSelector', function () {
    return {
      restrict: 'E',
      scope: {
        selection: '=?',
        load: '=',
        source: '=?',
        required: '='
      },
      templateUrl: 'views/accounts/cb-account-selector.html',
      controller: controller
    };

    function controller($scope, Accounts) {
      $scope.model = {};
      $scope.accounts = $scope.source;

      $scope.$watch('model.selection', function (selection, previousSelection) {
        //prevent loop at initialization
        if (previousSelection && !selection) {
          $scope.selection = null;
        }
        else if(selection) {
          $scope.selection = selection;
        }
      });

      $scope.$watch('selection', function (selection) {
        $scope.model.selection = selection;
      });

      if ($scope.load) {
        Accounts.query().$promise
          .then(function (accounts) {
            $scope.accounts = accounts;
          });
      }
    }
  });
