'use strict';

angular.module('cashbox').factory('Accounts',
  function ($resource) {
    return $resource('api/accounts/:accountId', {accountId: '@id'}, {
      update: 
      {
		  url: 'api/accounts/:accountId',
		  params: {accountId: '@id'},
		  method: 'PUT'
	  },
	  getTypes:
	  {
		  method: 'GET',
		  url: 'api/accounts/types',
		  isArray: true
	  }
    });
  });
