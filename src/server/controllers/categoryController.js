const Category = require('../models/categoryModel');

const categoryController = {};

// get categories
// need to grab all categories
categoryController.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.locals.categories = categories;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in categoryController getCategories',
      message: {
        err: 'An error has occured in categoryController getCategories',
      },
    });
  }
};

//create category
// need the name from the body
// add into database
// return new category
categoryController.createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCat = await Category.create({ name });
    const newData = await Category.find({});
    res.locals.newData = newData;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in categoryController createCategory',
      message: {
        err: 'An error has occured in categoryController createCategory',
      },
    });
  }
};

//update category
// name to be updated in params
// update name with newName in body
// repopulate
categoryController.updateCategory = async (req, res, next) => {
  try {
    const { name, newName } = req.body;
    const updated = await Category.findOneAndUpdate(
      { name },
      { name: newName },
      { new: true }
    );

    const newCategories = await Category.find({});
    res.locals.updatedData = [newCategories];
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in categoryController updateCategory',
      message: {
        err: 'An error has occured in categoryController updateCategory',
      },
    });
  }
};

// delete category
// pull name from params
// delete and return status code
// send back updated categories
categoryController.deleteCategory = async (req, res, next) => {
  try {
    const { name } = req.params;
    await Category.findOneAndDelete({ name });
    // send back new data without the deleted one
    const newCats = await Category.find({});
    res.locals.updatedData = [newCats];
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in categoryController deleteCategory',
      message: {
        err: 'An error has occured in categoryController deleteCategory',
      },
    });
  }
};

module.exports = categoryController;
