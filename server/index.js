let express = require('express');
let mongoose = require('mongoose');
let indexRoutes = require ('./routes/index.js');
var cors = require('cors')
let bodyParser = require('body-parser')
require("dotenv").config({ path: "./config.env" });
const Db = process.env.MongoURL;
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/', indexRoutes);

const CONNECTION_URL = Db;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
