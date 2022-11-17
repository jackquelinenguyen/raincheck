const User = require('../models/userModel');

const authController = {};

authController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({
      username,
      password,
    });
    res.locals.user = newUser;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in authController createUser',
      message: {
        err: 'An error has occured in authController createUser',
      },
    });
  }
};

authController.confirmUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const confirmation = await User.findOne({ username, password });
    res.locals.confirmation = confirmation;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in authController confirmUser',
      message: {
        err: 'An error has occured in authController confirmUser',
      },
    });
  }
};

module.exports = authController;
