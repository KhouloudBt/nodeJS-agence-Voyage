var dbConn = require('./../../db/db');

//Hotels object
var Hotels = function(hotel){
  this.name              = hotel.name;
  this.stars             = hotel.stars;
  this.phone             = hotel.phone;
  this.webSite           = hotel.webSite;
  this.country           = hotel.country;
  this.city              = hotel.city;
  this.roomCouple        = hotel.roomCouple;
  this.roomSingle        = hotel.roomSingle;
  this.allInclusive      = hotel.allInclusive;
  this.photo             = hotel.photo;
  //this.gallery           = hotel.gallery;
};

//create 
Hotels.create = function (newHot, result) {
dbConn.query("INSERT INTO hotels set ?", newHot, function (err, res) {
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
Hotels.findById = function (id, result) {
dbConn.query("Select * from hotels where id = ? ", id, function (err, res) {
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
Hotels.findAll = function (result) {
dbConn.query("Select * from hotels", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('hotels : ', res);
  result(null, res);
}
});
};

//update
Hotels.update = function(id, hotel, result){
dbConn.query("UPDATE hotels SET name=?,stars=?,phone=?,country=?,city=?,webSite=?,roomCouple=?,roomSingle=?,allInclusive=? WHERE id = ?",
[hotel.name,hotel.stars,hotel.phone,hotel.country,hotel.city,hotel.webSite,hotel.roomCouple,hotel.roomSingle,hotel.allInclusive, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};


//delete
Hotels.delete = function(id, result){
dbConn.query("DELETE FROM hotels WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Hotels;