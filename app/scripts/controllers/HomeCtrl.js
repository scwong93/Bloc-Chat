(function() {
    function HomeCtrl($uibModal, Room, Message) {
      var chat = this;

      chat.rooms = Room.all;

      chat.currentRoom = null;
      chat.messages = null;

      chat.newRoom = function() {
        $uibModal.open({
          controller: 'ModalCtrl as modal',
          templateUrl: '/templates/modal.html',
          size: 'sm'
        });
      }

      chat.setCurrentRoom = function(room) {
        chat.currentRoom = room;
        chat.messages = Message.getByRoomId(chat.currentRoom.$id);
      }
    }



    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();
