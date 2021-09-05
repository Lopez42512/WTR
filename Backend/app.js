const express = require("express");

const app = express();

const frontPageRoute = require("./routes/front-page");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', frontPageRoute)

app.listen(5000);