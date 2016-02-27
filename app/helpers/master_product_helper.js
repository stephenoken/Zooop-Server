'use strict';
const Product = require("./../models/product");
function searchMasterProducts(productName,res){
  console.log(Product.findByName(productName,(product)=>{
    console.log(product);
    res.send(product);
  }));
  console.log("2");
}


module.exports.searchMasterProducts = searchMasterProducts;
