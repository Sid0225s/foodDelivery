const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Sadyalfoods:052004q@cluster0.noe8exz.mongodb.net/?retryWrites=true&w=majority";

const mondoDB = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = mondoDB;
