var express = require("express");
var router = express.Router();
var profileCtrl = require("../controllers/profile");
var donutCtrl = require("../controllers/donuts");

// router.get("/profile", profileCtrl)
router.get("/profile/:id", profileCtrl.profile);
router.delete("/donuts/:id", donutCtrl.delete);
router.put("/donuts/:id", donutCtrl.update);

module.exports = router;