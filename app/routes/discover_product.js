'use strict';

const express = require('express');
const router = express.Router();
const DiscProdController = require("./../controllers/discover_product");
/*
{
product:@name,
retailerId:@_id
}
*/
router.post('/new',DiscProdController.newDiscoverProduct());

module.exports = router;
