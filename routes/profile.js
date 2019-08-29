var express = require("express");
var router = express.Router();
var profileCtrl = require("../controllers/profile");

// router.get("/profile", profileCtrl)
router.get("/profile/:id", profileCtrl.profile);
router.delete("/profile/:id", profileCtrl.delete);
console.log("delete item")

module.exports = router;