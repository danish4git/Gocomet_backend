const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tag_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// step 3 - Model
module.exports = mongoose.model("post", postSchema); // post => posts
