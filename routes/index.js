<<<<<<< HEAD
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("*", function (req, res, next) {
	res.render("index", { title: "Twitter Helpdesk" });
=======
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index', { title: 'Node-React-BP' });
>>>>>>> ff6009a4c7f47850f8c119fb038df1f519fc6b60
});

module.exports = router;
