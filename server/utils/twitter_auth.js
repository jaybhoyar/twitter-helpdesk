var passport = require("passport");
var TwitterStrategy = require("passport-twitter").Strategy;
var User = require("../models/user");

passport.use(
	new TwitterStrategy(
		{
			consumerKey: process.env.TWITTER_CONSUMER_KEY,
			consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
			callbackURL: "http://localhost:3000/api/users/twitter/redirect",
		},
		function (token, tokenSecret, profile, cb) {
			var details = profile._json;
			User.findOne({ twitterHandleId: details.id_str }, (error, user) => {
				if (user) {
					return cb(error, user);
				} else {
					var user = {
						name: details.name,
						handle: details.screen_name,
						twitterHandleId: details.id_str,
					};
					User.create(user, (err, user) => {
						return cb(error, user);
					});
				}
			});
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});
