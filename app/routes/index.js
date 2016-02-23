"use strict";
const express = require("express");
const mainCtrl = require('./../controllers/main');
const authCtrl = require("./../controllers/authentication");
const auth = require('./../middleware/authentication');
const accountCtrl = require('./../controllers/account');
const router = express.Router();

// router.get('/',mainCtrl.showPage('index',{title:'Zooop'}));
router.get('/',mainCtrl.showPage('index',{title:"Zooop"}));

router.get("/login",mainCtrl.showPage('login'));

router.post('/login', authCtrl.signin);
router.post('/signup',accountCtrl.signup);
router.get('/logout', authCtrl.signout);

router.get("/dashboard",auth.ensured,mainCtrl.showPage('dashboard',{test:"Hello World"}));

module.exports = router;
