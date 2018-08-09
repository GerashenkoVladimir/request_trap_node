const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

const { router } = require('./routes');
const { setEnvVars } = require('./config');

const db = mongoose.connection;


setEnvVars(app);


app.use(expressLayouts);

app.use((req, resp, next) =>{
  resp.io = io;
  next();
});

app.use('/', router);

const server = http.listen(app.get('PORT'), () => {
  console.log(`Request trap app listening on port ${app.get('PORT')}!`);
});

mongoose
.connect(app.get('DB_HOST'))
.catch(err => {
    console.error('Bad DB connection:', err.stack);
    server.close();
  });

db.once('open', () => console.log('succesfull connection'));
