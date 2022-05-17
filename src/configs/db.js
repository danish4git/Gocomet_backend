const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://danish:gocomet@cluster0.6jqej.mongodb.net/?retryWrites=true&w=majority/gocomet"
  );
};
