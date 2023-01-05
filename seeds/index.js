const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/yelpcamp_v1")
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((e) => {
    console.log("mongo error", e);
  });

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      author: "63b3f257c5f19c7d90c3d1ef",
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251",
      price: Math.floor(Math.random() * 20 + 10),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ducimus soluta ullam assumenda. Porro tempore adipisci eius fuga commodi sint autem deleniti? Rem excepturi vel a modi optio esse accusamus.",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
