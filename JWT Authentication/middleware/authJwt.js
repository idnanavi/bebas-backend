const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    //untuk mengambil value x-acces-token pada headers
  let token = req.headers["x-access-token"];

  //cek keberadaan token
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  //jika token ada,maka akan melanjutkan proses verifikasi
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

//mengecheck dari data yang ada pada db,apakah roles dia admin
isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require Admin Role!"
        });
        return;
      });
    });
  };

  const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
  };
  module.exports = authJwt;