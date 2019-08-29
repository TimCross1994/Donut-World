const Donuts = require("../models/donut");
const Eater = require("../models/eater")
module.exports = {
  index,
  create,
  show,
  newDount
};


function show(req, res) {
  Eater.findById(req.params.id, function(err, eater) {
    res.render("donuts/profile", {eater})
  
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
  Eater.findById(req.user._id, function(err, user) {
    var donut = new Donuts(req.body)
    user.donuts.push(donut)
    user.save(function(err) {
      console.log(donut);
      donut.save(function(err) {
        console.log(donut)
          if (err) return res.redirect("/new");
          res.redirect('/');
      }) 
    })
  })
};
    
  


