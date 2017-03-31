angular.module('blocChat', ['ui.bootstrap'])
  .factory('modalFactory', function($uibModal) {
    return {
      open: function(size, template, params) {
        return $uibModal.open({
          animation: true,
          templateUrl: template || 'myModalContent.html',
          controller: 'ModalResultInstanceCtrl',
          size: size,
          resolve: {
            params: function() {
              return params;
            }
          }
        });
      }
    };
  })
  .controller('ModalDemoCtrl', function($rootScope, $scope, $log, $uibModal) {

    $scope.items = ['room1', 'room2', 'room3'];

    $scope.animationsEnabled = true;

    $scope.open = function(size, template) {
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: template || 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size
        });

      modalInstance.result.then(function(selectedItem) {
        $scope.selected = selectedItem;
      }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function() {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

  });


angular.module('blocChat').controller('ModalCtrl', function($scope, $uibModalInstance, modalFactory) {


  $scope.ok = function() {
    modalFactory.open('lg', 'result.html', {searchTerm: $scope.searchTerm});
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});

angular.module('blocChat').controller('ModalCtrl', function($scope, $uibModalInstance, params) {

  $scope.searchTerm = params.searchTerm;

  $scope.ok = function() {
    $uibModalInstance.close($scope.searchTerm);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
})