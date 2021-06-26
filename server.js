const express = require("express");

const app = express();
//const sql = require("./config_DB/db");


//app.use(bodyParser);

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//app.use(express.json());
//app.use(express.urlencoded());
// set port, listen for requests
require("./src/routers/voyage.router")(app);
require("./src/routers/personnel.router")(app);
require("./src/routers/task.router")(app);

// Require employee routes
const hotel = require('./src/routers/role.router')(app);
// using as middleware
//app.use('/hotels', hotel)


app.listen(3002, () => {
    //console.log(sql);
   console.log("Server is running on port 3002.");
 });
