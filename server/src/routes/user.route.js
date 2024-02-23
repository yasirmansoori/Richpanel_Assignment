// Dependencies
const express = require('express');

// Controller
const userController = require("../controllers/user.controller");

// Module scaffolding
const userRouter = express.Router();

// register user using email and password
userRouter.post("/register", userController.register);
// login user using email and password
userRouter.post("/login", userController.login);
// get user
userRouter.get("/user", userController.getUser);

// Export module
module.exports = userRouter;
