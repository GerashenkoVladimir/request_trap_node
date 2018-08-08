const express = require('express');
const mongoose = require('mongoose');

const { router } = require('./routes');
const { setEnvVars } = require('./config');

const app = express();
const db = mongoose.connection;


setEnvVars(app);

app.use('/', router);

const server = app.listen(app.get('PORT'), () => {
  console.log(`Request trap app listening on port ${app.get('PORT')}!`);
});

mongoose
.connect(app.get('DB_HOST'))
.catch(err => {
    console.error('Bad DB connection:', err.stack);
    server.close();
  });

db.once('open', () => console.log('succesfull connection'));

