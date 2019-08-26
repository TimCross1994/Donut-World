var mongoose = require("mongoose");

module.exports = {
  index,
  addDonut
};

function index(req, res, next) {
  res.render('/index', {
    eater,
    user: req.user,
    name: req.query.name,
  });
}
function addDonut(req, res, next) {
  req.user.donuts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/donuts');
  });
}


