const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Music = new Schema({
   
    music:{
        type:String
    },
    musictype:{
  type:String
    },
    board:{
type:String
    },
    textid:{
        type:String
    }
});

module.exports = mongoose.model('Todo', Music);