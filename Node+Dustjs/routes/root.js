module.exports = function(app){
    new RootController(app);
};

var RootController = function(app){
    app.get('/', this.index);
};

// GET /
RootController.prototype.index = function(req, res){
    res.render('index', { title : 'Index'});
};

