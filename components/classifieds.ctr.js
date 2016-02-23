(function() {

  "use strict";
  angular
    .module('udemyAngular')
      .controller('classifiedsCtrl', function($scope) {

        $scope.name = {
          first: 'Joseph',
          last: 'Nolan'
        };

        $scope.message = 'hello, world'

      });
})();
