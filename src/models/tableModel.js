const mongoose = require('mongoose');


const tableSchema = new mongoose.Schema({
  tableId: {
    type: Number,
    required: true
  },
  
  capacity: {
    type: Number,
    required: true
  },

  occupied:{
    type:Boolean,
    required:true
  }
});


const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
