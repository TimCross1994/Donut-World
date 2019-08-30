var Eater = require('../models/eater')

module.exports = {
    profile,
};

function profile(req,res) {
    console.log("HITTING")
    Eater.findById(req.params.id)
    .populate('donuts')
    .exec(function(err, eater){
        console.log(eater)
        res.render("donuts/profile", {
            eater
        })
    })
}
