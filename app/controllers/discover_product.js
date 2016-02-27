'use strict';
const MasterProductHelper = require("./../helpers/master_product_helper");

function newDiscoverProduct(){
    return (req,res)=>{
      MasterProductHelper.searchMasterProducts("Black Tea",res);
    };
}

module.exports.newDiscoverProduct = newDiscoverProduct;
