
const mongoose = require('mongoose');
const { Schema } = mongoose;

 const Message = new Schema({
  
  sender:String,
  
  receiver:String,
  
  Ticket:String,

  Message:String
  
});


module.exports= MessageModel = mongoose.model('Message', Message);
