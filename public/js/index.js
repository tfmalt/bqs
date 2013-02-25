$(document).ready(function () {
    // alert("got ready");
    $(window).resize(function (event) {
        index.placeLoginbox();
    });
});

var index = {
    placeLoginbox: function () {
        var login = $('#login');
        var pos   = login.offset();
        var width = login.outerWidth();

        var loginbox = $('#loginbox');
        var left = pos.left + (width/2) - (loginbox.outerWidth()/2)

        loginbox.css({ 
            'top': (pos.top - 20) + "px",
            'left': left + "px"
        });
    },

    handleFBLoginStatus: function (response) {
        console.log("facebook loginstatus response: ", response);
        if (response.status === 'connected') {
            FB.api('/me', index.redirectFBLogin);
        } else if (response.status !== 'not_authorized') {
            FB.login(index.handleFBLogin);
        }
    },

    redirectFBLogin: function (response) {
        console.log("Got my information: ", response);
        $.post("/fblogin", response);

    },

    handleFBLogin: function (response) {
        console.log("facebook login response: ", response);
    }
};

window.fbAsyncInit = function () {
    FB.init({
        appId: FACEBOOK_APP_ID,
        status: true,
        cookie: true,
        xfbml: true
    });

    FB.getLoginStatus(index.handleFBLoginStatus);
};

(function(d){
     var js;
     var id  = 'facebook-jssdk';
     var ref = d.getElementsByTagName('script')[0];

     if (d.getElementById(id)) {return;}

     js       = d.createElement('script'); 
     js.id    = id; 
     js.async = true;
     js.src   = "//connect.facebook.net/en_US/all.js";

     ref.parentNode.insertBefore(js, ref);
}(document));