(function() {
  var app;

  app = angular.module('oocss');

  app.controller('mainCtrl', [
    "$scope",
    function($scope) {
      return $scope.version = "1.0.0";
    }
  ]);

}).call(this);

//# sourceMappingURL=controllers.js.map
