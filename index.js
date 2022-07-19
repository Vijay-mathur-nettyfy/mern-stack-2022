const path = require("path");
const cors = require("cors");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

const TagsRouter = require("./Routes/tags_routes");
const UrlsRouter = require("./Routes/urls_routes");

const app = express();
const PORT = process.env.PORT;
console.clear();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const buildPath = path.join(__dirname + "/build");
// app.use(express.static(buildPath));

// app.use(UrlsRouter)
// app.use(TagsRouter)
const versions = {
  first_version: `/v1/api`,
};
const models = {
  urls: "/u",
  tags: "/t",
};

app.use(versions.first_version + models.urls, UrlsRouter);
app.use(versions.first_version + models.tags, TagsRouter);

app.get("/*", (req, res) => {
  res.send("hey");
  // res.sendFile(path.join(buildPath, "/index.html"));
});

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => console.error("connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

var server = app.listen(PORT, function () {
  console.log(`Server is running on Port :${PORT}`);
});

// db.close()
// server.setTimeout(0)
