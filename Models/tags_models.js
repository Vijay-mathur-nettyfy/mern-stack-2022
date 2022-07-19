const mongoose = require("mongoose")

const TagsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    urls: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

const Tags = mongoose.model("Tags", TagsSchema)

module.exports = Tags
