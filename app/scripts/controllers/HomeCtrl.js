(function() {
    function HomeCtrl($uibModal, Room, Messages) {
      var chat = this;

      chat.rooms = Room.all;

      chat.currentRoom = null;

      chat.newRoom = function() {
        $uibModal.open({
          controller: 'ModalCtrl as modal',
          template: '/templates/modal.html'
        });
      }

      chat.setCurrentRoom = function(room) {
        chat.currentRoom = room;
        chat.messages = Messages.getByRoomId(chat.currentRoom.$id);
        return chat.messages;
      }
    }



    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Messages', HomeCtrl]);
})();
