const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { hash, compare } = require("bcryptjs");

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		twitterHandleId: String,
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	try {
		if (this.password && this.isModified("password")) {
			this.password = await hash(this.password, 10);
		}
		next();
	} catch (error) {
		next(error);
	}
});

userSchema.methods.verifyPassword = async function (password, next) {
	try {
		return await compare(password, this.password);
	} catch (error) {
		next(error);
	}
};

module.exports = mongoose.model("User", userSchema);
