const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const Campground = require("./models/campground");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/yelpcamp_v1")
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((e) => {
    console.log("mongo error", e);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campground", async (req, res) => {
  const camp = new Campground({
    title: "My backyard",
    price: 5,
    description: "cheap camping",
  });
  await camp.save();
  res.send(camp);
});

app.listen(3000, () => {
  console.log("Serving on port 3000!");
});
