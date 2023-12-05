
const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller")


route.get("/soma", userController.soma);

module.exports = route;
