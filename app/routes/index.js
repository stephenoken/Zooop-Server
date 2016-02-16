"use strict";
const express = require("express");
const mainCtrl = require('./../controllers/main');
const authCtrl = require("./../controllers/authentication");
const auth = require('./../middleware/authentication');
const accountCtrl = require('./../controllers/account');
const router = express.Router();

router.get('/',mainCtrl.showPage('index',{title:'Zooop'}));

router.get("/login",(req,res)=>{
  console.log(req.user);
  res.render('login');
});

router.post('/login', authCtrl.signin);
router.post('/signup',accountCtrl.signup);
router.get('/logout', authCtrl.signout);

router.get('/protected',auth.ensured,(req,res)=>{
  res.render('protected');
});
router.get("/dashboard",(req,res)=>{
  res.render('dashboard');
});

module.exports = router;
