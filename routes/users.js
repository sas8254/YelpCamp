const express = require("express");
const router = express.Router();
const User = require("../models/users");
const users = require("../controllers/users");
const passport = require("passport");

router.get("/register", users.renderRegister);

router.post("/register", users.register);

router.get("/login", users.renderLogin);

router.post("/login", users.login);

router.get("/logout", users.logout);

module.exports = router;
