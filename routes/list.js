// GET /:slug

exports.show = function(req, res){
  var items = [{name: 'Sweet Backpack', price: 10.03, link: 'http://google.com'}];
  var slug = req.params.slug;

  res.render('list', { title: slug, items: items});
};
