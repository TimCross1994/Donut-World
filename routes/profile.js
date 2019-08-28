var express = require("express");
var router = express.Router();
var profileCtrl = require("../controllers/profile");

// router.get("/profile", profileCtrl)
router.post("/dont/:id/profile", profileCtrl.create);

module.exports = router;