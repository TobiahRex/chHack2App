'use strict';

var io = require('socket.io');

let Socket ={
  initSocket(io, socket){
    socket.on('hello', data => {
      console.log('DATA: ', data);
    });
  }
}

module.exports = Socket;
