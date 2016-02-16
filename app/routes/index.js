"use strict";
const express = require("express");
const mainCtrl = require('./../controllers/main');
const authCtrl = require("./../controllers/authentication");
const router = express.Router();

router.get('/',mainCtrl.showPage('index',{title:'Zooop'}));

router.get("/login",(req,res)=>{
  console.log(req.user);
  res.render('login');
});

router.post('/login', authCtrl.signin);
router.get('/logout', authCtrl.signout);
module.exports = router;
