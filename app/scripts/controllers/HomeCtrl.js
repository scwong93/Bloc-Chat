(function() {
    function HomeCtrl($scope, Room) {
      $scope.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
