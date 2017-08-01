(function() {
    function RoomCtrl(Room) {
      var rooms = $scope.all;
      return rooms;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
