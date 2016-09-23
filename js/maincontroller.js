app.controller("MainController", function($scope){


$scope.yiftee = {
      image : "img/yiftee.png",
      style : {
      "width" : "100%",
      "padding-top" : "25%"
    }
  }

$scope.arranca = {
  image : "img/arranca.png",
  style : {
    "width" : "70%"
  }
}

$scope.eship = {
  image : "img/eship.png",
  style : {
    "width" : "70%"
  }
}

$scope.spotery = {
  image : "img/spotery.png",
  style : {
    "padding-top" : "30%",
    "width" : "105%"
  }
}

$scope.h3 = {
  image : "img/h3-conference.png",
  style : {
    "width" : "100%"
  }
}

$scope.enfoque = {
  image : "img/enfoque.png",
  style : {
    "width" : "100%",

  }
}

$scope.inprende = {
  image : "img/inprende.png",
  style : {
    "width" : "100%"
  }
}

$scope.sunne = {
  image : "img/sunne.png",
  style : {
    "width" : "100%"
  }
}

$scope.appcreatrs1 = {
  image : "img/appcreatrs1.jpg",
  
}


$scope.appcreatrs3 = {
  image : "img/appcreatrs3.jpg",

}

$scope.appcreatrs = [$scope.appcreatrs1, $scope.appcreatrs3];

$scope.rowOne = [$scope.yiftee, $scope.spotery, $scope.inprende, $scope.arranca];

$scope.rowTwo = [$scope.h3, $scope.sunne, $scope.eship, $scope.enfoque];

});

app.directive("footer", function() {
    return {
      restrict : 'E',
      templateUrl : "footer.html",
    };
})
