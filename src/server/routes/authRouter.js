const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

authRouter.post('/createUser', authController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

authRouter.post('/confirmUser', authController.confirmUser, (req, res) => {
  return res.status(200).json(res.locals.confirmation);
});
module.exports = authRouter;
