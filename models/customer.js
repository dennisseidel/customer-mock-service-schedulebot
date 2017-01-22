const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
  surname: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    lowercase: true,
  },
  contracts: {
    type: Array,
    required: true,
  },
  centralagentid: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
});

module.exports = { Customer };