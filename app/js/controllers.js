'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$http', function($scope,$http) {
        $scope.data = {};

        $scope.submitPN = function() {
            $http.jsonp('http://api.uihoo.com/mobile/mobile.http.php?mobile=13612907536&format=jsonp&callback=JSON_CALLBACK')
                .success(function(data){
                    console.log(data);
                }).error(function(){console.log('fail')});
        };
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
