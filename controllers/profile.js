var Donut = require("../models/donut");
var Eater = require('../models/eater')

module.exports = {
    show,
    profile,
    delete: deleteDonut
};

function profile(req,res) {
    Eater.findById(req.params.id)
    .populate('donuts')
    .exec(function(err, eater){
        console.log(eater)
        res.render("donuts/profile", {
            eater
        })
    })
//    Eater.findById(req.params.id, function(e, ea){
//        console.log(ea)
//    })
}
function show(req, res) {
    Donut.findById(req.params.id, function(err, movie) {
        res.render("/profile", {title: "Your Donuts", donuts });
    })
}

function deleteDonut(req,res){    
    Donut.findByIdAndDelete(req.params.id, function(err, donuts) {
        if(err) res.redirect("/")
        res.redirect("/")
    })
}
    