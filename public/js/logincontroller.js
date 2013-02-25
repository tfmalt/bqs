
angular.module('bqs', [])
    .controller('LoginController', function ($scope) {
        "use strict";
        $scope.handleLoginClick = function ($ev) {
            // alert("Got login click");
            var el = angular.element(document.getElementById("loginbox"));   
            console.log("got login click", $ev, el);
            index.placeLoginbox();

            el.removeClass("hidden");
            el.addClass("animated bounceIn");
        };
        
        $scope.handleFacebookClick = function ($ev) {
            console.log("Got facebook click");
            FB.login(index.handleFBLogin);
        };
    });