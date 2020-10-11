const Show = require('../models/show.model');

exports.findAll = function(req, res) {
    Show.findAll(function(err, event) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', event);
      res.send(event);
    });
};

exports.create = function(req, res) {
  const new_show = new Show(req.body);
  //handles null error
  // if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  //   res.status(400).send({ error:true, message: 'Please provide all required field' });
  // }else{
  Show.create(new_show, function(err, show) {
    // if (err)
    // res.send(err);
    res.json({error:false,message:"Show added successfully!",data:show});
  });
  // }
};

exports.findById = function(req, res) {
  Show.findById(req.params.id, function(err, show) {
    if (err)
    res.send(err);
    res.json(show);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Show.update(req.params.id, new Show(req.body), function(err, show) {
  //  if (err)
  //  res.send(err);
   res.json({ error:false, message: 'Shows successfully updated' });
});
}
};
exports.delete = function(req, res) {
Show.delete( req.params.id, function(err, show) {
  // if (err)
  // res.send(err);
  res.json({ error:false, message: 'Show successfully deleted' });
});
};