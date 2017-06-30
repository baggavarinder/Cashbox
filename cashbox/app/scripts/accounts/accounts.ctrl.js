'use strict';

angular.module('cashbox').controller('AccountsCtrl',
  function ($scope, $modal, Accounts, AccountsData) {
    $scope.accounts = Accounts.query({fields: 'current_balance,transactions_count'});

    $scope.getTotalBalance = function () {
      return AccountsData.getTotalBalance($scope.accounts);
    };

    $scope.createAccount = function () {
      var createAccount = $modal.open({
        templateUrl: 'views/accounts/account.edit.html',
        controller: 'AccountEditCtrl',
        resolve: {
          account: function () {
            return {};
          }
        }
      });

      createAccount.result.then(function (account) {
        Accounts.save(account).$promise
          .then(function (newAccount) {
            $scope.accounts.splice($scope.accounts.indexOf(account), 1, newAccount);
          })
          .catch(function () {
            $scope.accounts.splice($scope.accounts.indexOf(account), 1);
          });
        $scope.accounts.push(account);
      });
    };

    $scope.editAccount = function (account) {
      var editAccount = $modal.open({
        templateUrl: 'views/accounts/account.edit.html',
        controller: 'AccountEditCtrl',
        resolve: {
          account: function () {
            return angular.copy(account);
          }
        }
      });

      editAccount.result.then(
        function (modifiedAccount) {
          Accounts.update({accountId: modifiedAccount.id}, modifiedAccount).$promise
            .then(function (updatedAccount) {
              $scope.accounts.splice($scope.accounts.indexOf(account), 1, updatedAccount);
            });
        }, function (reason) {
          if (reason === 'delete') {
            deleteAccount(account);
          }
        });
    };

    function deleteAccount(account) {
      var confirm = $modal.open({
        templateUrl: 'views/accounts/account.delete.html',
        controller: 'AccountDeleteCtrl',
        resolve: {
          accountName: function () {
            return account.name;
          }
        }
      });

      confirm.result.then(function () {
        var index = $scope.accounts.indexOf(account);
        $scope.accounts.splice(index, 1);

        Accounts.delete({accountId: account.id}).$promise
          .catch(function () {
            $scope.accounts.push(account);
          });
      });
    }
  });
