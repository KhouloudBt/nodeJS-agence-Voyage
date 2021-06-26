const express = require("express");
const bodyParser = require("body-parser");
//const sql = require("./config_DB/db");
var cors = require('cors');
var app = express();
//app.use(cors({  origin: '*'}));

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

require("./src/routers/reservation.router")(app);


require("./src/routers/task.router")(app);


// Require employee routes
//const hotel = require('./src/routers/role.router')(app);
const hotel = require('./src/routers/hotel.router')
// using as middleware
app.use('/hotels', hotel)

app.listen(3002, () => {
    //console.log(sql);
   console.log("Server is running on port 3002.");
 });
