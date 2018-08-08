const express = require('express');
const { router } = require('./routes');
const mongoose = require('mongoose');
const { setEnvVars } = require('./config');

const app = express();
const db = mongoose.connection;


setEnvVars(app);

mongoose
  .connect(app.get('DB_HOST'))
  .catch(err => {
    console.error('Bad DB connection:', err.stack);
    process.exit(1);
  });
db.once('open', function () {
  console.log('succesfull connection');
});

app.use('/', router);

app.listen(app.get('PORT'), function () {
  console.log(`Request trap app listening on port ${app.get('PORT')}!`);
});
