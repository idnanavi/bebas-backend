const dbConn = require("../config/db.config");

let Show = function(event){
    this.day = event.day;
    this.date = event.date;
    this.title = event.title;
    this.timeStart = event.timeStart;
    this.timeStop = event.timeStop;
    this.price = event.price;
    this.address = event.address;
    this.addressDetail = event.addressDetail;
    this.showDetail = event.showDetail;
    this.artist = event.artist;
    this.showPicture = event.showPicture;
};

Show.create = function (newShows, result) {
    dbConn.query("INSERT INTO shows set ?", newShows, function (err, res) {
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

Show.findById = function (id, result) {
    dbConn.query("Select * from shows where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
};

Show.findAll = function (result) {
    dbConn.query("Select * from shows", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('shows : ', res);
      result(null, res);
    }
    });
};

Show.delete = function(id, result){
  dbConn.query("DELETE FROM shows WHERE id = ?", [id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    result(null, res);
  }
  });
};

Show.update = function(id, show, result){
  dbConn.query("UPDATE shows SET day=?,date=?,title=?,timeStart=?,price=?,address=?,addressDetail=?,showDetail=?,artist=?,timeStop=? WHERE id = ?", [show.day,show.date,show.title,show.timeStart,show.price,show.address,show.addressDetail,show.showDetail,show.artist,show.timeStop, id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }else{
    result(null, res);
  }
  });
};

module.exports= Show;