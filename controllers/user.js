const User = require("../models/user");
const auth = require("../utils/auth");

module.exports = {
	register: async (req, res, next) => {
		try {
			if (!req.body.user) {
				return res.status(400).json({ message: "Wrong Input" });
			}
			var user = await User.create(req.body.user);
			res.json({ user });
		} catch (error) {
			next(error);
		}
	},
	login: async (req, res, next) => {
		try {
			var { user } = req.body;
			if (!user || !user.email || !user.password) {
				return res.status(400).json({ message: "Wrong Input" });
			}
			var currentUser = await User.findOne({ email: user.email });
			if (!currentUser) {
				return res.status(404).json({ message: "Invalid email" });
			}
			var result = await currentUser.verifyPassword(user.password);
			if (!result) {
				return res.status(401).json({ message: "Invalid password" });
			}
			var token = await auth.generateJwt(currentUser, next);
			res.json({ user: currentUser, token });
		} catch (error) {
			next(error);
		}
	},
	getCurrentUser: async (req, res, next) => {
		try {
			var userId = req.userId;
			var user = await User.findById(userId);
			if (!user) {
				res.status(404).send({ massage: "User not found" });
			}
			res.send({ user });
		} catch (error) {
			next(error);
		}
	},
};
