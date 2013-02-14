
var counter = 0;

exports.index = function(req, res) {
    counter += 1;
    var data = {counter: counter};
    res.render('index', data);
};