const Quotation = require('../models/quotation.model');

exports.findAll = function(req, res) {
  Quotation.findAll(function(err, event) {
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', event);
        res.send(event);
    });
};

exports.create = function(req, res) {
  const new_quotation = new Quotation(req.body);

  Quotation.create(new_quotation, function(err, quotation) {
    res.json({error:false,message:"Quotation added successfully!",data:quotation});
  });
};

exports.findById = function(req, res) {
  Quotation.findById(req.params.id, function(err, quotation) {
    if (err)
    res.send(err);
    res.json(quotation);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Quotation.update(req.params.id, new Quotation(req.body), function(err, quotation) {
  
   res.json({ error:false, message: 'Quotation successfully updated' });
});
}
};
exports.delete = function(req, res) {
  Quotation.delete( req.params.id, function(err, quotation) {
      res.json({ error:false, message: 'Quotation successfully deleted' });
  });
};