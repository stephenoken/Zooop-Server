"use strict";
const express = require("express");
const mainCtrl = require('./../controllers/main');
const authCtrl = require("./../controllers/authentication");
const auth = require('./../middleware/authentication');
const accountCtrl = require('./../controllers/account');
const router = express.Router();
const adsCtrl = require("./../controllers/adsController");
const prodCtrl = require('./../controllers/product');

// router.get('/',mainCtrl.showPage('index',{title:'Zooop'}));
router.get('/',mainCtrl.showPage('index',{title:"Zooop"}));

router.get("/login",mainCtrl.showPage('login'));

// TODO: Move to another routes file
router.get("/addProduct",(req,res)=>{
  res.render('addProduct');
});

router.post('/login', authCtrl.signin);
router.post('/signup',accountCtrl.signup);
router.get('/logout', authCtrl.signout);

router.get("/dashboard",auth.ensured,mainCtrl.showPage('dashboard'));
router.post('/discover', adsCtrl.saveDiscoverAd());



router.post('/myaction', prodCtrl.storeProduct());

module.exports = router;
