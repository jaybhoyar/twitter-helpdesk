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
			User.findOne({ twitterHandleId: details.id_str }, (error, user) => {
				if (user) {
					return cb(error, user);
				} else {
					var user = {
						name: details.screen_name,
						twitterHandleId: details.id_str,
						image: details.profile_image_url_https,
					};
					User.create(user, (error, user) => {
						return cb(error, user);
					});
				}
			});
		}
	)
);

passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});
