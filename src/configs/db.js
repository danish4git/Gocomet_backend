const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://danish:dummygocomet@cluster0.diyyv.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
