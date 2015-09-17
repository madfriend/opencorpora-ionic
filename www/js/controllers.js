angular.module('starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $state, $ionicPopup, Auth) {
  // Form data for the login modal
  $scope.loginData = {};

  $scope.logout = function() {
    Auth.logout();
    $state.go("login");
  };

  var alertPopup = function() {
    $ionicPopup.alert({
       title: 'Ошибка',
       template: 'Введите логин и пароль'
     });
  };

   // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    if(!angular.isDefined($scope.loginData.username) || !angular.isDefined($scope.loginData.password) || $scope.loginData.username.trim() == "" || $scope.loginData.password.trim() == "") {
       alertPopup();
       return;
    }

    Auth.setUser({
      username: $scope.loginData.username
    });

    $state.go("app.tasks");

  };

})

.controller('TasksCtrl', function($scope, $stateParams, $ionicModal) {

  $scope.items = [
    { title: "Существительное, мн. ч.: именительный / винительный", complexity: 3,
      started: false },
    { title: "Существительное, ед. ч.: именительный / винительный", complexity: 3,
      started: true },
    { title: "Существительное: единственное / множественное число", complexity: 1,
      started: false },
    { title: "Причастие, ед. ч., ж.р.: родительный / дательный / творительный / предложный", complexity: 2,
      started: false },
  ];

  $ionicModal.fromTemplateUrl('templates/instruction.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

})

.controller('SettingsCtrl', function($scope, $stateParams) {

})

.controller('ProfileCtrl', function($scope, $stateParams) {

})

;