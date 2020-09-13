/*
*
*   server.js
*   mern-covid19-aid project
*   Zvei Eliezer Nir & Refael Knoll
*
*/

// server configuration
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const managersRouter = require('./routes/managers');
const distributorsRouter = require('./routes/distributors');
const targetsRouter = require('./routes/targets');

app.use('/managers', managersRouter);
app.use('/distributors', distributorsRouter);
app.use('/targets', targetsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});