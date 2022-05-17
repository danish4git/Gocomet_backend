const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  main_img: String,
  tag: Array,
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      creater: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      text: String,
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);
