
angular.module('bqs', [])
    .controller('LoginController', function ($scope) {
        "use strict";
        $scope.handleLoginClick = function ($ev) {
            console.log("got login click");
            // alert("Got login click");
            var el = $('#loginbox');
            index.placeLoginbox();

            el.removeClass("hidden").removeClass("bounceOut");
            el.addClass("animated bounceIn");
        };
        
        $scope.handleFacebookClick = function ($ev) {
            console.log("Got facebook click");
            FB.login(index.handleFBLogin);
        };
    });