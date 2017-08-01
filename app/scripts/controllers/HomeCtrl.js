(function() {
    function HomeCtrl(Room) {
      this.room = Room;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
