

exports.index = function(req, res) {
    // counter += 1;
    // var data = {counter: counter};
    res.render('index', {});
};

exports.admin = function(req, res) {
    res.send("<h1>Admin</h1>");
}