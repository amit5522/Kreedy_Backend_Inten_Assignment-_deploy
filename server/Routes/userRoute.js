const express = require('express');
const { user_register, user_login,getUserDetails,logoutUser } = require('../Controller/userController');
const isAuthenticatedUser =require('../middleware/auth');
const router = express.Router();

//register route
router.route('/register').post(user_register);
//login
router.route('/login').post(user_login);
//logout
router.route('/logout').get(logoutUser);
//get user details
router.route("/me").get(isAuthenticatedUser,getUserDetails);









module.exports =router;