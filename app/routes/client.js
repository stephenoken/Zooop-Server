"use strict";
const express = require("express");
const router = express.Router();

const ClientCtrl = require('./../controllers/client');


router.post('/new-info',ClientCtrl.createNew());
module.exports = router;
