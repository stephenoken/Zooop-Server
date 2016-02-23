"use strict";
const express = require("express");
const mainCtrl = require('./../controllers/main');
const authCtrl = require("./../controllers/authentication");
const auth = require('./../middleware/authentication');
const accountCtrl = require('./../controllers/account');
const router = express.Router();

// router.get('/',mainCtrl.showPage('index',{title:'Zooop'}));
router.get('/',(req,res)=>{
  res.render('index',{title:"Zooop",currentUser:req.user});
});

router.get("/login",(req,res)=>{
  res.render('login');
});

router.get("/test",(req,res)=>{
  res.render('addProduct');
});

router.post('/login', authCtrl.signin);
router.post('/signup',accountCtrl.signup);
router.get('/logout', authCtrl.signout);

router.get("/dashboard",auth.ensured,(req,res)=>{
  res.render('dashboard',{user:req.user});
});

router.post('/myaction', function(req, res) {

  res.send(JSON.stringify(req.body.name, null, 4));

  res.send('You sent the name "' + req.body.name + '".');
});

module.exports = router;
