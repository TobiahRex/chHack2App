'use strict';

const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
  data :    []
});

//   data : [
//     {
//       messagesPerInterveral : [{lat, long, body, time},{},{}],
//       messagesCount         :   Number,
//       clicksPerInterval     :   [{lat, long, time},{}],
//       clicksCount           :   Number,
//       IntervalTime          :   String,
//
//     }
// ]

postSchema.statics.createDatabase = cb => {
  Post.create((err, database)=> {
    err ? cb(err) : cb(null, {SUCCESS: `Database Created`, DATA : database});
  });
};

postSchema.statics.addInterval = (intervalObj, cb) => {
  Post.find({}, (err, dbData)=> {
    if(err) cb(err);
    dbData.push(intervalObj);
    dbData.save((err, savedData)=> {
      err ? cb(err) : cb(null, savedData);
    });
  });
};


let Post = mongoose.model('Post', postSchema);
module.exporst = Post;
