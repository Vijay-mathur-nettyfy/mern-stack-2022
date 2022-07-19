const express = require("express");
const urlModel = require("../Models/urls_models");
const app = express();

// ...
app.post("/post", async (request, response) => {
  //  now its supports single object and array of objects.

  try {
    var result = await urlModel.create(request.body);
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
// ...
app.delete("/delete/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const url = await urlModel.findByIdAndDelete(id);
    console.log(url);
    response.status(200).send({ id });
  } catch (error) {
    response.status(500).send(error);
  }
});
// ...
// app.delete("/delete_all", async (request, response) => {
//   console.log(request.body)
//   try {
//     // var result = await urlModel.deleteMany(request.body)
//     response.status(200).send("ok")
//   } catch (error) {
//     response.status(500).send(error)
//   }
// })
// ...
app.put("/put/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { body } = request;
    const url = await urlModel.findByIdAndUpdate(id, body);
    response.status(200).send({ url: body });
  } catch (error) {
    response.status(500).send(error);
  }
});
// ...
app.get("/get", async (request, response) => {
  const urls = await urlModel.find({});

  try {
    response.send(urls);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;
