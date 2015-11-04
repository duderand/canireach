function index(req, res) {
    res.render('index', { title: 'Can I reach?', datamain: 'index' });
}
exports.index = index;
;
function test(req, res) {
    res.render('test', { title: 'test', datamain: 'test' });
}
exports.test = test;
;
//# sourceMappingURL=index.js.map