const express = require("express");
const router = express.Router();
const controller = require("../controllers/emaillist");


router.route('').get(controller.readAll);

module.exports = router;
