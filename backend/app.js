const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const uri = require("./pass");

// Create Express App
const app = express();

// Database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(uri);
  console.log("Database is Successfully Connected");
  listen()
}

app.use(bodyParser.json());

// Routes
app.get("/", (res, req) => {
  res.send("Home Page");
});

// const TodosRoute = require('./routes/Todos')
// app.use('/todos', TodosRoute)

// Start Server
function listen() {
  app.listen(3000, () => {
    console.log("Server is Listening on port 3000...");
  });
}
