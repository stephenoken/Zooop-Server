'use strict';

const express = require('express');
const router = express.Router();
const RetailerProdController = require("./../controllers/retailer_product");
/*
{
product:@name,
retailerId:@_id
}
*/
router.post('/new',RetailerProdController.newRetailerProduct());

module.exports = router;
