(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var Messages = $firebaseArray(ref);
    Message.all = messages;

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId))
    };

    Message.send = function(newMessage) {
      messages.$add(newMessage);
      newMessage.timestamp = firebase.database.ServerValue.TIMESTAMP;
    };

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
