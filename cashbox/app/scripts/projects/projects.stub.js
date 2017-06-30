'use strict';

angular.module('cashbox').run(function ($httpBackend, nobackend) {
  if (!nobackend) {
    return;
  }

  var projects = [
    {
      user_id: 1,
      id: 1,
      name: 'Project One',
      transactions_count: 124,
      incomes_total: 122454.20,
      expenses_total: 15340
    },
    {
      user_id: 1,
      id: 2,
      name: 'Project Two',
      transactions_count: 89,
      incomes_total: 3420,
      expenses_total: 12140
    }
  ];

  $httpBackend.whenGET(/^api\/projects(\?\S+)*$/).respond(projects);

  $httpBackend.whenPOST(/^api\/projects$/).respond(function (method, url, data) {
    var project = JSON.parse(data);
    project.id = 999;
    return [200, project];
  });

  $httpBackend.whenPUT(/^api\/projects\/(\d+)$/).respond(function (method, url, data) {
    return [200, data];
  });

  $httpBackend.whenDELETE(/^api\/projects\/(\d+)$/).respond(401);
});
