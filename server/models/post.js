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

postSchema.statics.updateData = (newDataObj, cb) => {

  let dataObj = new Post({
    "parentInterval" :  {
      "time"                  :  newDataObj.time,
      "messagesPerInterval"   :  newDataObj.messagesPerInterval,
      "clicksPerInterval"     :  newDataObj.clicksPerInterval,
      "messageCount"          :  newDataObj.messageCount,
      "clickCount"            :  newDataObj.clickCount
    }
  });

  dataObj.save(err =>{
    err ? cb(err) :
    Post.find({}, (err, updatedData)=>{
      console.log('updatedData: \n\n', updatedData);
      err ? cb(err) : cb(null, updatedData);
    });
  });
};

let Post = mongoose.model('Post', postSchema);
module.exports = Post;
