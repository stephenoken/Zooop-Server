"use strict";
const Product = require("./../models/product")
function storeProduct () {
	return (req, res)=>{
		res.send(Product.sample);
	};
}

module.exports.storeProduct = storeProduct;