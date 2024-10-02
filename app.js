// Basic Lib Import
const express = require('express');
const app = express();

// Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const path = require('path');
const cors = require('cors');

// Database Lib Import
const mongoose = require('mongoose');
app.use(express.static('client/build'));

// Security Middleware Implement
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Configure CORS

app.use(cors());

// Body Parser Implement
app.use(express.json()); // Simplified for parsing JSON

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);



const appRouter = require('./src/routes/api');
app.use("/api", appRouter);

// Mongo DB Database Connection
let URI = "mongodb+srv://mobinulislam:8NWFTTL3vZqC2W0L@cluster0.mskd8ua.mongodb.net/protfolio";
mongoose.set('strictQuery', false);

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(5050, () => {
      console.log(`Mongoose is connected`);
    });
  }).catch(e => {
    console.log(e);
  });

module.exports = app;
