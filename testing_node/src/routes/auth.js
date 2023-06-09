const express = require("express");
const AuthController = require("../controller/auth");
const { serviceController } = require("../controller");
const router = express.Router();


router.get("/userList",auth)