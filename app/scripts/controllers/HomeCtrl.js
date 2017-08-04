(function() {
    function HomeCtrl($uibModal, Room, Message, $cookies) {
      var chat = this;

      chat.rooms = Room.all;
      chat.currentUser = $cookies.get('blocChatCurrentUser');
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

      chat.sendMessage = function() {
        chat.newMessage.roomId = chat.currentRoom.$id;
        chat.newMessage.username = chat.currentUser;
        Message.send(chat.newMessage);
      }
    }




    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
})();
