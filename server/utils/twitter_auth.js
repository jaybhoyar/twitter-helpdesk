var passport = require("passport");
var TwitterStrategy = require("passport-twitter").Strategy;
var User = require("../models/user");
console.log("in twitter auth");

passport.use(
	new TwitterStrategy(
		{
			consumerKey: process.env.TWITTER_CONSUMER_KEY,
			consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
			callbackURL:
				"http://localhost:3100/api/users/login/twitter/callback",
		},
		function (token, tokenSecret, profile, cb) {
			var details = profile._json;
			console.log(details);
			return cb(null, profile);
		}
	)
);

passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	cb(null, obj);
});
