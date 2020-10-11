const dbConn = require("../config/db.config");

let Quotation = function(event){
    this.existingBandName = event.existingBandName;
    this.fullName = event.fullName;
    this.genre = event.genre;
    this.reason = event.reason;
    this.newBandName = event.newBandName;
};

Quotation.create = function (newQuotation, result) {
    dbConn.query("INSERT INTO quotations set ?", newQuotation, function (err, res) {
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

Quotation.findById = function (id, result) {
    dbConn.query("Select * from quotations where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Quotation.findAll = function (result) {
    dbConn.query("Select * from quotations", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('quotations : ', res);
      result(null, res);
    }
    });
};

Quotation.delete = function(id, result){
  dbConn.query("DELETE FROM quotations WHERE id = ?", [id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    result(null, res);
  }
  });
};

Quotation.update = function(id, quotation, result){
  dbConn.query("UPDATE quotations SET existingBandName=?,fullName=?,genre=?,reason=?,newBandName=? WHERE id = ?", [quotation.existingBandName,quotation.fullName,quotation.genre,quotation.reason,quotation.newBandName, id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }else{
    result(null, res);
  }
  });
};

module.exports= Quotation;