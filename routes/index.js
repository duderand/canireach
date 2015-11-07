var urlrecords = require('../app/urlrecords');
function index(req, res) {
    res.render('index', { title: 'index', datamain: 'index' });
}
exports.index = index;
;
function test(req, res) {
    res.render('test', { title: 'test', datamain: 'test' });
}
exports.test = test;
;
function list(req, res) {
    var isJson = req.accepted.some(function (type) { return type.value === 'application/json'; });
    if (isJson) {
        res.json(urlrecords.getblocked(req));
    }
    else {
        res.render('list', { title: 'list', datamain: 'list', blocked: urlrecords.getblocked(req) });
    }
}
exports.list = list;
;
//# sourceMappingURL=index.js.map