const Transport = require('../services/transport.service');

exports.findAll = function(req, res) {
transport.findAll(function(err, transport) {
  if (err)
  res.send(err);
  console.log('res', transport);
  res.send(transport);
});
};


exports.create = function(req, res) {
const new_transport = new Transport(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Transport.create(new_transport, function(err, transport) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Transport added successfully!",data:transport});
});
}
};


exports.findById = function(req, res) {
Transport.findById(req.params.id, function(err, transport) {
  if (err)
  res.send(err);
  res.json(transport);
});
};


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Transport.update(req.params.id, new Transport(req.body), function(err, transport) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Transport successfully updated' });
});
}
};


exports.delete = function(req, res) {
Transport.delete( req.params.id, function(err, transport) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Transport successfully deleted' });
});
};