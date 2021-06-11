const Hotel = require('../services/hotel.service');

exports.findAll = function(req, res) {
Hotel.findAll(function(err, hotel) {
  if (err)
  res.send(err);
  console.log('res', hotel);
  res.send(hotel);
});
};


exports.create = function(req, res) {
const new_hotel = new Hotel(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Hotel.create(new_hotel, function(err, hotel) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Hotel added successfully!",data:hotel});
});
}
};


exports.findById = function(req, res) {
Hotel.findById(req.params.id, function(err, hotel) {
  if (err)
  res.send(err);
  res.json(hotel);
});
};


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Hotel.update(req.params.id, new Hotel(req.body), function(err, hotel) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Hotel successfully updated' });
});
}
};


exports.delete = function(req, res) {
Hotel.delete( req.params.id, function(err, hotel) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Hotel successfully deleted' });
});
};