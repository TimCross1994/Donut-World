var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Eater = require('../models/eater');



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Eater.findOne({ "googleId" : profile.id }, function(err, eater) {
      if (err) return cb(err);
      if (eater) {
        return cb(null, eater);
        // if(!eater.avatar) {
        //   eater.avatar = profile.photos[0].value;
        //   eater.save(function(err) {
        //     return cb(null, eater);
        //   });
        // }
       } else {
            var newEater = new Eater({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId:profile.id
            });
            newEater.save(function(err) {
                if (err) return cb(err);
                return cb(null, newEater);
            })
        }  
    })
  }
));
passport.serializeUser(function(eater, done) {
    done(null, eater.id);
});
passport.deserializeUser(function(id, done) {
    Eater.findById(id, function(err, eater) {
      done(err, eater);
    });
  });''