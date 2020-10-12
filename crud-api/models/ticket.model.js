const dbConn = require("../config/db.config");

let Ticket = function(event){
    this.title = event.title;
    this.day = event.day;
    this.date = event.date;
    this.time = event.time;
    this.quantityRsvp = event.quantityRsvp;
    this.closesDate = event.closesDate;
    this.closesTime = event.closesTime;
    this.userId = event.userId;
};

Ticket.create = function (newTicket, result) {
    dbConn.query("INSERT INTO tickets set ?", newTicket, function (err, res) {
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

Ticket.findById = function (id, result) {
    dbConn.query("Select * from tickets where id = ? ", id, function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        result(null, res);
      }
  });
};

Ticket.findAll = function (result) {
    dbConn.query("Select * from tickets", function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(null, err);
        }
        else{
          console.log('tickets : ', res);
          result(null, res);
        }
    });
};

Ticket.delete = function(id, result){
  dbConn.query("DELETE FROM tickets WHERE id = ?", [id], function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }
      else{
        result(null, res);
      }
  });
};

Ticket.update = function(id, ticket, result){
  dbConn.query("UPDATE tickets SET title=?,day=?,date=?,time=?,quantityRsvp=?,closesDate=?,=?,closesTime=?,userId=? WHERE id = ?", [ticket.title,ticket.day,ticket.date,ticket.time,ticket.quantityRsvp,ticket.closesDate,ticket.closesTime,ticket.userId, id], function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(null, err);
      }else{
        result(null, res);
      }
  });
};

Ticket.findByUserId = function (userId, result) {
  dbConn.query("Select * from tickets where userId = ? ", userId, function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        result(null, res);
      }
  });
};


module.exports= Ticket;