'use strict';
const Client = require('./../models/client');
class ClientController {
  createNew(){
    return (req,res)=>{
      Client.create(req.body,(err,client)=>{
        if (err) {
          res.json({status:'error'});
        }else if(client){
          res.json({status:"success",clientId:client._id});
        }
      });
    };
  }
}

module.exports = new ClientController();
