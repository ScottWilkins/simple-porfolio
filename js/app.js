var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .otherwise({
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
});
