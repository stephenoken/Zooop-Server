"use strict";
const express = require("express");
const mainCtrl = require('./../controllers/main');
const router = express.Router();


router.get("/teach",mainCtrl.showPage('teach'));


module.exports = router;