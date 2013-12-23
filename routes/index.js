
/*
 * GET home page.
 */

exports.index = function(req, res){
  var lists = [{ slug: 'basses', name: 'Bass Guitars'}, { slug: 'backpacks', name: 'Backpacks'}, {slug: 'messengers', name: 'Messenger Bags'}];

  res.render('index', { title: 'Retain', lists: lists });
};
