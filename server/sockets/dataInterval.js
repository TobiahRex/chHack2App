'use strict';

const io = require('socket.io');
const moment = require('moment');
const Post  = require('../models/post');

let ioData = {
  saveData(io, socket){
    let count = 0
    socket.on('hello', data => {
      ++count;
      console.log('DATA backend\n',data, '\ncount: ', count);
    });

    let clicks = []

    let messages = []

    socket.on('addClick', click=> {
      console.log('click: ', click);
      clicks.push(click);
    });

    socket.on('addMessage', message=> {
      console.log('message: ', message);
      messages.push(message);
    });

    setInterval(()=>{
      let parentInterval = {
        "time"                : moment().format('LTS'),
        "messagesPerInterval" : [],
        "clicksPerInterval"   : [],
        "messageCount"        : 0,
        "clickCount"          : 0
      };
      parentInterval.messagesPerInterval = messages;
      parentInterval.clicksPerInterval = clicks;


      parentInterval.messageCount  = parentInterval.messagesPerInterval.length;
      parentInterval.clickCount    = parentInterval.clicksPerInterval.length;



      // console.log('BACKEND parentInterval: ', parentInterval);

      Post.updateData(parentInterval, (err, newData)=>{
        clicks = [];
        messages = [];
        err ? socket.emit('dbData', err) : socket.emit('dbData', newData);
      });
    }, 10000);

  }
};

module.exports = ioData;
