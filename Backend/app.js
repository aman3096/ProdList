const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.listen(1234);

console.log("Created Successfully");