const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//mengambil routes show untuk kebutuhan crud api
const showRoutes = require('./crud-api/routes/show.routes')
const quotationRoutes = require('./crud-api/routes/quotation.routes')
const ticketRoutes = require('./crud-api/routes/ticket.routes')

const app = express();

let corsOptions = {
    origin: "http://localhost:4200"
};

const db = require("./JWT Authentication/models");
const Role = db.role;

//sync memastikan express untuk mengeksekusi code pada bagian ini sebelum proses lain dapat berjalan
db.sequelize.sync().then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

app.use(cors(corsOptions));
//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
  });  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/show', showRoutes);
app.use('/quotation',quotationRoutes);
app.use('/ticket',ticketRoutes);

//memastikan setiap routes yang dipanggil akan melalui proses authentikasi dahulu)
require('./JWT Authentication/routes/auth.routes')(app);
require('./JWT Authentication/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log('Server is running on port ' + PORT);
});

//function yang dibutuhkan untuk membuat inisial role user dan admin
function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });
} 
  
