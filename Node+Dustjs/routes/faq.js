module.exports = function(app){
    new FAQController(app);
};

var FAQController = function(app){
    // This is route prototype
    app.get('/faq', this.index);
};

// Define routes functions under here
// GET /
FAQController.prototype.index = function(req, res){
    res.render('faq', { title : 'FAQ', name : 'Arthur'});
};