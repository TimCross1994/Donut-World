var router = require('express').Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { 
    title: 'Donut Journalists',
    user: req.user,
    name: req.query.name,
    // sortKey
   });
});
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
module.exports = router;
