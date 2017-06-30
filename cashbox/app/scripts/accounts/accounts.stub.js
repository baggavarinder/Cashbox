'use strict';

angular.module('cashbox').run(function ($httpBackend, nobackend) {
  if (!nobackend) {
    return;
  }

  var accounts = [
    {
      id: 1,
      name: 'Cash',
      current_balance: 1230.4,
      transactions_count: 45
    },
    {
      id: 2,
      name: 'Citibank',
      current_balance: 13000,
      transactions_count: 2
    }
  ];

  $httpBackend.whenGET(/^api\/accounts(\?\S+)*$/).respond(accounts);

  $httpBackend.whenPOST(/^api\/accounts$/).respond(function (method, url, data) {
    var account = JSON.parse(data);
    account.id = 999;
    return [200, account];
  });

  $httpBackend.whenPUT(/^api\/accounts\/(\d+)$/).respond(function (method, url, data) {
    return [200, data];
  });

  $httpBackend.whenDELETE(/^api\/accounts\/(\d+)$/).respond();
});
