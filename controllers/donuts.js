const Donuts = require("../models/donut");

module.exports = {
  index,
  create,
  show,
  newDount
};


function show(req, res) {
  Donuts.findById(req.params.id, function(err, donuts) {
    res.render("/profile", {donuts})
  
  })
}
function index(req, res, next) {
  Donuts.find({}, function(err, donuts) {

    res.render('donuts/index', { 
      title: 'Donut Journalists',
      user: req.user,
      name: req.query.name,
      donuts
    });
  })
}

function newDount(req,res) {
  res.render("donuts/new", {user:req.user})
}

function create(req, res) {
  var donut = new Donuts(req.body)
  console.log(donut);
  donut.save(function(err) {
    console.log(donut)
      if (err) return res.redirect("/new");
      res.redirect('/');
  })}


