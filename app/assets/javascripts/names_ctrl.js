
(function () {
  "use strict";

  angular.module("app").controller("namesCtrl", function($scope){
  $scope.people = people
  var hideDetails = true;
  $scope.click = function(){
    if(hideDetails=== true){
      hideDetails = false
    }else{
      hideDetails = true
    };
  };
  $scope.hide = function(){
      return hideDetails
    };
  $scope.toggleOne = function(person){
    console.log(person.visable)
    if(person.visable === true ){
      person.visable = false
    }else{
      person.visable = true
    }
  }

  $scope.hideAgain = function(person){
    console.log("boom")
    return person.visable
  }

  });

})();
