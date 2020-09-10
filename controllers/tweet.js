const config = require("../utils/config");
const Twit = require("twitter");
const axios = require("axios");
const Twitter = new Twit(config.twitter);
const Tweet = require("../models/tweets");
const SinceId = require("../models/sinceId");

module.exports = {
	getMentions: async (req, res, next) => {
		try {
			console.log("in mentions --------------------------------");
			// var sinceId = await SinceId.find({});

			// var url = sinceId.length
			// 	? `statuses/mentions_timeline.json?since_id=${sinceId[0].last_since_id}`
			// 	: `statuses/mentions_timeline`;

			Twitter.get("statuses/mentions_timeline", {}, function (
				err,
				data,
				response
			) {
				console.log(data);
			});
			// var latestSinceId = res.data.length && res.data[0].id_str;

			// if (!sinceId.length) {
			// 	await SinceId.create({
			// 		last_since_id: latestSinceId,
			// 	});
			// } else if (latestSinceId) {
			// 	await SinceId.findByIdAndUpdate(
			// 		sinceId[0]._id,
			// 		{ last_since_id: latestSinceId },
			// 		{ new: true }
			// 	);
			// }
			// console.log(res.data, "response ------");
			// res.data.forEach(async (bookmark) => {
			// 	var index = bookmark.text.split(" ").indexOf("addto");
			// 	var category = bookmark.text.split(" ")[index + 1];
			// 	var bookmarkTweet = await Twitter.get(
			// 		`statuses/show.json?tweet_mode=extended&id=${bookmark.in_reply_to_status_id_str}`
			// 	);

			// var tweetBody = {
			// 	authorId: user.id,
			// 	tweet: bookmarkTweet.data,
			// 	twitterUserId: bookmark.user.id_str,
			// };

			// await Tweet.create(tweetBody);
		} catch (error) {
			next(error);
		}
	},
};
