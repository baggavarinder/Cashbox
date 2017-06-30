'use strict';

angular.module('cashbox').factory('AccountsData',
  function () {
    return {
    	getTotalBalance: function(accounts){
    		return _.reduce(accounts, function (sum, account) {
	        return sum + account.current_balance;
	      }, 0);
    	}
    };
  });
