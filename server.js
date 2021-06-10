const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const sql = require("./config_DB/db");


//app.use(bodyParser);

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.json());
//app.use(express.urlencoded());
// set port, listen for requests
require("./src/routers/voyage.router")(app);
require("./src/routers/personnel.router")(app);
app.listen(3002, () => {
    //console.log(sql);
   console.log("Server is running on port 3002.");
 });
