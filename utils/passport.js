var passport = require("passport");
var TwitterStrategy = require("passport-twitter").Strategy;
var User = require("../models/user");

passport.use(
	new TwitterStrategy(
		{
			consumerKey: process.env.TWITTER_CONSUMER_KEY,
			consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
			callbackURL:
				"http://localhost:3000/api/users/login/twitter/callback",
		},
		function (token, tokenSecret, profile, cb) {
			var details = profile._json;
			User.findByIdAndUpdate(
				req.userId,
				{ twitterHandleId: details.id_str },
				{ new: true },
				(error, user) => {
					if (error) {
						return cb(error, user);
					}
				}
			);

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
