var util = require('util');

exports.index = function(req, res) {
    // counter += 1;
    // var data = {counter: counter};
    var data = {
        'FACEBOOK_APP_ID': process.env.FACEBOOK_APP_ID,
        'FACEBOOK_SECRET': process.env.FACEBOOK_SECRET
    };
    
    console.log("GOT CALL TO INDEX:", util.inspect(data));
    res.render('index', data);
};

exports.admin = function(req, res) {
    res.send("<h1>Admin</h1>");
};

exports.fblogin = function(req, res) {
    console.log("got fblogin post: ", util.inspect(req.body));  
};