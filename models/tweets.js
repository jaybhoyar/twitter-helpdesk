var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tweetSchema = new Schema(
	{
		authorId: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		twitterUserId: {
			type: String,
		},
		tweet: {
			type: Object,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
