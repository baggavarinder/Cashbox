'use strict';

angular.module('cashbox').controller('ProjectsCtrl',
  function ($scope, $modal, Projects) {
    $scope.projects = Projects.query({
      fields: 'transactions_count,incomes_total,expenses_total'
    });

    $scope.createProject = function () {
      var createProject = $modal.open({
        templateUrl: 'views/projects/project.edit.html',
        controller: 'ProjectEditCtrl',
        resolve: {
          project: function () {
            return {};
          }
        }
      });

      createProject.result.then(function (project) {
        $scope.projects.push(project);

        Projects.save(project).$promise
          .then(function (newProject) {
            angular.extend(project, newProject);
          })
          .catch(function () {
            $scope.projects.splice($scope.projects.indexOf(project), 1);
          });
      });
    };

    $scope.editProject = function (project) {
      var editProject = $modal.open({
        templateUrl: 'views/projects/project.edit.html',
        controller: 'ProjectEditCtrl',
        resolve: {
          project: function () {
            return angular.copy(project);
          }
        }
      });

      editProject.result.then(
        function (modifiedProject) {
          Projects.update({projectId: modifiedProject.id}, modifiedProject).$promise
            .then(function (updatedProject) {
              angular.extend(project, updatedProject);
            });
        }, function (reason) {
          if (reason === 'delete') {
            deleteProject(project);
          }
        });
    };

    $scope.getProjectDifference = function (project) {
      return (project.incomes_total || 0) - (project.expenses_total || 0);
    };

    $scope.getTotalTransactionsCount = function () {
      return _.reduce($scope.projects, function (sum, project) {
        return sum + (project.transactions_count || 0);
      }, 0);
    };

    $scope.getTotalIncome = function () {
      return _.reduce($scope.projects, function (sum, project) {
        return sum + (project.incomes_total || 0);
      }, 0);
    };

    $scope.getTotalExpenses = function () {
      return _.reduce($scope.projects, function (sum, project) {
        return sum + (project.expenses_total || 0);
      }, 0);
    };

    $scope.getTotalDifference = function () {
      return $scope.getTotalIncome() - $scope.getTotalExpenses();
    };

    function deleteProject(project) {
      var confirm = $modal.open({
        templateUrl: 'views/projects/project.delete.html',
        controller: 'ProjectDeleteCtrl',
        resolve: {
          projectName: function () {
            return project.name;
          }
        }
      });

      confirm.result.then(function () {
        var index = $scope.projects.indexOf(project);
        $scope.projects.splice(index, 1);

        Projects.delete({projectId: project.id}).$promise
          .catch(function () {
            $scope.projects.push(project);
          });
      });
    }
  });
