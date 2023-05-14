const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  email: {
    type: "String",
    unique: true,
    required: true,
  },
  password: {
    type: "String",
    minLenght: 6,
    required: true,
  },
  addedMovies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Movie",
    },
  ],
});
const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
