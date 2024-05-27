'use strict';

const mongoose = require("mongoose");

const connectString = `mongodb://127.0.0.1:27017/testdb`;

mongoose
    .connect(connectString)
    .then((_) => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));

module.exports = mongoose;