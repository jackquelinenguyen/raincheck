const express = require('express');
const noteRouter = express.Router();
const noteController = require('../controllers/noteController');

// get request means populate all notes from that specific catergory
// need name of category in params or body?
noteRouter.get('/getNotes', noteController.getNotes, (req, res) => {
  return res.status(200).json(res.locals.notes);
});

// post request means add new note to category
// in body of post, we need the schema for noteController
// repopulate
// include name of category in post request

noteRouter.post('/createNote', noteController.newNote, (req, res) => {
  return res.status(200).json(res.locals.newData);
});

// patch request means to edit details in the link
// add what you want to edit in the query link
// so we know what to update in the database
// repopulate

noteRouter.patch('/updateNote', noteController.updateNote, (req, res) => {
  return res.status(200).json(res.locals.newData);
});

// when a category name gets updated, we also need to update the notes in our database and update their category title
// NOT SURE IF WE NEED THIS YET!!! USING A MIDDLEWARE FUNCTION IN THE CATEGORY ROUTER
// noteRouter.patch(
//   '/newCategory/:category',
//   noteController.newCategory,
//   (req, res) => {
//     return res.status(200).json();
//   }
// );

// delete request means we're going to delete the note from the category
// repopulate
// include the title of the note you want to delete inside the request body

noteRouter.delete('/deleteNote', noteController.deleteNote, (req, res) => {
  // returning updated collection without deleted note
  return res.status(200).json(res.locals.newData);
});

module.exports = noteRouter;
