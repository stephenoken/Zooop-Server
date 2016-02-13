"use strict";
const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('index',{title:'Zooop'});
});

router.get("/login",(req,res)=>{
  res.render('login');
});

module.exports = router;
