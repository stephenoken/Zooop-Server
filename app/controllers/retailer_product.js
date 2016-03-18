'use strict';
const MasterProductHelper = require("./../helpers/master_product_helper");

function newRetailerProduct(){
    return (req,res)=>{
      MasterProductHelper.searchMasterProducts("Black Tea",res);
    };
}

module.exports.newRetailerProduct = newRetailerProduct;
