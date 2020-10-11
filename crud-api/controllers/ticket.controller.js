const Ticket = require('../models/ticket.model');

exports.findAll = function(req, res) {
    Ticket.findAll(function(err, event) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', event);
      res.send(event);
    });
};

exports.create = function(req, res) {
  const new_ticket = new Ticket(req.body);
 
  Ticket.create(new_ticket, function(err, ticket) {
    res.json({error:false,message:"Ticket added successfully!",data:ticket});
  });
  // }
};

exports.findById = function(req, res) {
  Ticket.findById(req.params.id, function(err, ticket) {
    if (err)
    res.send(err);
    res.json(ticket);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Ticket.update(req.params.id, new Ticket(req.body), function(err, ticket) {
   res.json({ error:false, message: 'Tickets successfully updated' });
});
}
};
exports.delete = function(req, res) {
Ticket.delete( req.params.id, function(err, ticket) {
  
  res.json({ error:false, message: 'Ticket successfully deleted' });
});
};

exports.findByUserId = function(req, res) {
  Ticket.findByUserId(req.params.userId, function(err, ticket) {
    if (err)
    res.send(err);
    res.json(ticket);
  });
};