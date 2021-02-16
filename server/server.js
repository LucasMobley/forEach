const express = require('express');
const { get } = require('http');
const path = require('path');
const PORT = 3000;
const app = express();
// const apiRouter = require('./routes');

const dataBaseController = require('./controllers/donationsController.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname , '../build')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/getDonations", dataBaseController.getDonations,  (req,res) => {
  res.status(200).json(res.locals.donations);
})

app.post("/makeDonation", dataBaseController.makeDonation, (req, res) => {
  res.sendStatus(200);

})



app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = app;