const Note = require('../models/noteModel');

const noteController = {};

// get all notes for a specific catergory
// need the name of the category in the params or body
noteController.getNotes = async (req, res, next) => {
  try {
    // send all notes to frontend
    const notes = await Note.find({});
    // return to frontend
    res.locals.notes = notes;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in noteController getNotes',
      message: {
        err: 'An error has occured in noteController getNotes',
      },
    });
  }
};

// add new note
// need category of the note
// send back new note
noteController.newNote = async (req, res, next) => {
  try {
    const { category, title, link, details } = req.body;
    const newNote = await Note.create({
      category,
      title,
      link,
      details,
    });
    const newData = await Note.find({});
    res.locals.newData = newData;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in noteController newNote',
      message: {
        err: 'An error has occured in noteController newNote',
      },
    });
  }
};

// patch request, means updating the note
noteController.updateNote = async (req, res, next) => {
  // check the title to know which note you need to update
  // have frontend send all the needed things in a model
  try {
    const { title } = req.body;
    const { newTitle, newLink, newDetails } = req.body;
    const updated = await Note.findOneAndUpdate(
      {
        title,
      },
      {
        title: newTitle,
        link: newLink,
        details: newDetails,
      },
      { new: true }
    );
    const newData = await Note.find({});
    res.locals.newData = newData;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in noteController updateNote',
      message: {
        err: 'An error has occured in noteController updateNote',
      },
    });
  }
};

// for when a category name gets updated, we'll have to update the category key in each of it's notes too
noteController.updateNewCategory = async (req, res, next) => {
  try {
    const { name, newName } = req.body;
    const updated = await Note.updateMany(
      { category: name },
      { category: newName }
    );
    const newNotes = await Note.find({});
    res.locals.updatedData.push(newNotes);
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in noteController newCategory',
      message: {
        err: 'An error has occured in noteController newCategory',
      },
    });
  }
};

// delete note
noteController.deleteNote = async (req, res, next) => {
  try {
    const { title } = req.body;
    const deleted = await Note.findOneAndDelete({ title });
    const newData = await Note.find({});
    res.locals.newData = newData;
    return next();
  } catch (err) {
    return next({
      log: 'Error handler caught in noteController deleteNote',
      message: {
        err: 'An error has occured in noteController deleteNote',
      },
    });
  }
};

module.exports = noteController;
