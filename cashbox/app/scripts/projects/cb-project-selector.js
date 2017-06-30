'use strict';

angular.module('cashbox')
  .directive('cbProjectSelector', function () {
    return {
      restrict: 'E',
      scope: {
        selection: '=?',
        load: '=',
        source: '=?',
        required: '='
      },
      templateUrl: 'views/projects/cb-project-selector.html',
      controller: controller
    };

    function controller($scope, Projects) {
      $scope.model = {};
      $scope.projects = $scope.source;

      $scope.$watch('model.selection', function (selection, previousSelection) {
        //prevent loop at initialization
        if (previousSelection && !selection) {
          $scope.selection = null;
        }
        else if(selection) {
          $scope.selection = selection;
        }
      });
	  
	  // to clear the selected option
      $scope.clearProject = function($event) {
	   $event.stopPropagation(); 
	   $scope.model.selection = undefined;
	   };
	  
      $scope.$watch('selection', function (selection) {
        $scope.model.selection = selection;
      });

      if ($scope.load) {
        Projects.query().$promise
          .then(function (projects) {
            $scope.projects = projects;
          });
      }
    }
  });
