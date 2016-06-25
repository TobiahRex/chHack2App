'use strict';

const PORT      = 4000;
const MONGOURL  = process.env.MONGODB_URI  ||  'mongodb://localhost/chHackathon2'

const express     = require('express');
let app           = express();
const server      = require('http').Server(app);
const io          = require('socket.io')(server);

const router      = express.Router();
const path        = require('path');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const cookieParser= require('cookie-parser');


app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use((req, res, next)=> {
  res.handle = (err, dbData) => {
    console.log('err: ', err,'dbData: ', dbData);
    res.status(err ? 400 : 200).send(err || dbData);
  };
  next();
});

app.use('/api', require('./server/routes/api'));
app.use('/', require('./server/routes/index'));


io.on('connection', (socket)=>{
  console.log('Client Connected', socket.handshake.address);

});

mongoose.connect(MONGOURL, err => {
  console.log(err || `MONGO @ ${MONGOURL}`);
});
server.listen(PORT, err => {
  console.log(err || `Server @ ${PORT}`);
});
