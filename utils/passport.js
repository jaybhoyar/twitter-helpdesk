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
				console.log(details);
				// if (user) {
				// 	return cb(error, user);
				// } else {
				// 	var user = {
				// 		name: details.screen_name,
				// 		twitterHandleId: details.id_str,
				// email: screen_name + "@gmail.com";
				// 	};
				// 	User.create(user, (err, user) => {
				// 		return cb(error, user);
				// 	});
				// }
			});
			cb(null, profile);
		}
	)
);

passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	cb(null, obj);
});
