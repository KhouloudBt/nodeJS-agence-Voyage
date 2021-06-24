var dbConn = require('../../config_DB/db');

//Transport object
var Transport = function(transport){
  this.Type                      = transport.name;
  this.Model                     = transport.stars;
  this.Number_places             = transport.phone;
  this.Color                     = transport.webSite;
  this.disponibillity            = transport.country;

};

//create 
Transport.create = function (newHot, result) {
dbConn.query("INSERT INTO transport set ?", newHot, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};


//findbyid
Transport.findById = function (id, result) {
dbConn.query("Select * from transport where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

//findbyDisponibillity
Transport.findByDispo = function ( result) {
dbConn.query("Select * from transport where disponibillity=true ", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


// find all
Transport.findAll = function (result) {
dbConn.query("Select * from transport", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('transport : ', res);
  result(null, res);
}
});
};

//update
Transport.update = function(id, transport, result){
dbConn.query("UPDATE transport SET Type=?,Model=?,Number_places=?,Color=?,disponibillity=? WHERE id = ?",
[transport.Type,transport.Model,transport.Number_places,transport.Color,transport.disponibillity,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};


//delete
Transport.delete = function(id, result){
dbConn.query("DELETE FROM transport WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Transport;