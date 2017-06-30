'use strict';

angular.module('cashbox').factory('Projects', function ($resource) {
  return $resource('api/projects/:projectId', {projectId: '@id'}, {
    update: {method: 'PUT'}
  });
});
