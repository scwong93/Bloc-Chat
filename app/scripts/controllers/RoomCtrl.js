(function() {
    function RoomCtrl(Room) {
      $scope.rooms = Room;
    }

    return $scope.rooms;

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
