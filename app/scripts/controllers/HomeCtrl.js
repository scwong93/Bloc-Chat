(function() {
    function HomeCtrl($scope, $uibModal, Room) {
      $scope.rooms = Room.all;

      this.newRoom = function() {
        $uibModal.open({
          controller: 'ModalCtrl as modal',
          template: '/templates/modal.html'
        });
      }
    }



    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', HomeCtrl]);
})();
