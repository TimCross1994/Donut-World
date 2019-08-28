var express = require('express');
var router = express.Router();
var donutsCtrl = require("../controllers/donuts")


router.get('/', donutsCtrl.index);
router.get("/new", donutsCtrl.newDount);
router.post('/', donutsCtrl.create)


module.exports = router;