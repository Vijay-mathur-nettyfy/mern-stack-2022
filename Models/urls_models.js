const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

const Url = mongoose.model("Url", UrlSchema)

module.exports = Url
