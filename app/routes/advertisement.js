'use strict';
const express = require("express");
const adsCtrl = require("./../controllers/adsController");
const router = express.Router();

router.post("/create-discover-ad",adsCtrl.saveDiscoverAd());

router.get('/get-discover-ads', adsCtrl.getDiscoverAds());

module.exports = router;
