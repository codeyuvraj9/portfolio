const mongoose = require('mongoose');
const {Schema} = mongoose;

const Review = new Schema({
   firstName:{
       type: String,
       required: true
   },
   lastName:{
    type: String,
},
   email:{
       type: String,
       required: true
   },
   date:{
       type: Date,
       default: Date.now
   },
   message:{
    type: String,
    required: true
    }
});
module.exports = mongoose.model('portfolio', Review);