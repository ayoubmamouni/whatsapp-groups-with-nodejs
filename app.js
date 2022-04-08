const express = require("express");
const mongoose = require("mongoose");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  const logger = require("morgan");
  app.use(logger("dev"));
}

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDb"))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
