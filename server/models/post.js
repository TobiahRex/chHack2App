'use strict';

const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  parentInterval :  {
    time    :     {
      type    :   String
    },
    messagesPerInterval   :  [],
    clicksPerInterval     :  [],
    messageCount          :   {
      type    :    Number
    },
    clickCount            :   {
      type    :    Number
    }
  }
});


postSchema.statics.addInterval = (intervalObj, cb) => {

  let newIntervalObj = new Post({
    parentInterval :  {
      time                  :  intervalObj.time,
      messagesPerInterval   :  intervalObj.messagesPerInterval,
      clicksPerInterval     :  intervalObj.clicksPerInterval,
      messageCount          :  intervalObj.messageCount,
      clickCount            :  intervalObj.clickCount
    }
  });
  console.log('new data Model: ', newIntervalObj);

  newIntervalObj.save(err => {
    if(err) return cb(err);
    Post.find({}, (err, updatedData)=>{
      err ? cb(err) : cb(null, updatedData);
    });
  });
};


let Post = mongoose.model('Post', postSchema);

module.exports = Post;
