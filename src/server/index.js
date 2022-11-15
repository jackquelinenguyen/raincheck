// necessary required modules
const express = require('express');
const path = require('path');
const { urlencoded } = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// port information
const app = express();
const PORT = 3000;

// database information
const MONGO_URI =
  'mongodb+srv://jackquelinenguyen:martycat@cluster0.hvjcaym.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo Db.'))
  .catch((err) => console.log(err));

// json
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// routers
// serve static files 
app.get('/', express.static(path.join(__dirname, '../client/public')));

// catch all
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured caught in global error handler' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

// starting server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}! Welcome to Jackie's Project`);
});

module.exports = app;
