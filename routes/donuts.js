var express = require('express');
var router = express.Router();
var donutsCtrl = require("../controllers/donuts")


router.get('/', donutsCtrl.index);
router.get('/donuts/:id/edit', donutsCtrl.edit)
router.get('/new', donutsCtrl.newDount);
router.get('/:id', donutsCtrl.show)
router.post('/', donutsCtrl.create)
router.post('/donuts/:id', donutsCtrl.update)


module.exports = router;
