const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');
const noteController = require('../controllers/noteController');

// get request means populate categories
categoryRouter.get(
  '/getCategories',
  categoryController.getCategories,
  (req, res) => {
    return res.status(200).json(res.locals.categories);
  }
);

// post request means add new category
// need the name of the category in request body
categoryRouter.post(
  '/createNewCategory',
  categoryController.createCategory,
  (req, res) => {
    return res.status(200).json(res.locals.newData);
  }
);

// patch request means update name of category
// also updates all the notes with that specific category to have a new category

categoryRouter.patch(
  '/updateCategory',
  categoryController.updateCategory,
  noteController.updateNewCategory,
  (req, res) => {
    // returns an array of 2 arrays
    // first array is an array of category objects
    // second array is an array of notes objects
    return res.status(200).json(res.locals.updatedData);
  }
);

// delete request means delete category from the database
// sends back data without deleted category

categoryRouter.delete(
  '/deleteCategory/:name',
  categoryController.deleteCategory,
  noteController.deletedCategory,
  (req, res) => {
    return res.status(200).json(res.locals.updatedData);
  }
);
module.exports = categoryRouter;
