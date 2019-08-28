var Donut = require("../models/profile");

module.exports = {
    create
};

function create(req, res) {
    Donut.findById(req.params.id, function(err, donut) {
        donut.profile.get(req.body);
        donut.save(function(err) {
            res.redirect(`1/${donut._id}`);
        })
    })
}