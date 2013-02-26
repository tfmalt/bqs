var util = require('util');
var mg = require('mongoose');

console.log ('mongodb: ', process.env.MONGOLAB_URI);
mg.connect(process.env.MONGOLAB_URI);
var db = mg.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Callback got called.");
});

var userSchema = mg.Schema({
    first_name: String,
    last_name:  String,
    nick_name: String,
    facebook: {
        id:     Number,
        link:   String,
        name:   String,
        gender: String,
        username: String,
        languages: Array 
    },
    created_at: Date,
    updated_at: Date
});

var User = mg.model('User', userSchema);

exports.index = function(req, res) {
    // counter += 1;
    // var data = {counter: counter};
    var data = {
        'FACEBOOK_APP_ID': process.env.FACEBOOK_APP_ID,
        'FACEBOOK_SECRET': process.env.FACEBOOK_SECRET
    };
    
    console.log("GOT CALL TO INDEX:", util.inspect(data));
    console.log("req.session: ", util.inspect(req.session));
    console.log("req.cookies: ", util.inspect(req.cookies));
    res.render('index', data);
};

exports.admin = function(req, res) {
    res.send("<h1>Admin</h1>");
};

exports.fblogin = function(req, res) {
    console.log("got fblogin post: ");
    var data = req.body;
    var user = new User({
        first_name:     data.first_name,
        last_name:      data.last_name,
        facebook: data,
        created_at: new Date(),
        updated_at: new Date()
    });
    user.save();
    console.log("saved");
};

exports.fb_loginstatus = function(req, res) {
    console.log("got fb_loginstatus: ", req.body);
};
