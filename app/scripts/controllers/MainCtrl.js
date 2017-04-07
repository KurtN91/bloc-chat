(function() {
    function MainCtrl($scope, Room) {
        $scope.rooms = Room.all;
        this.chatRoomTitle = "Chat Room";
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['$scope', 'Room', MainCtrl]);
})();