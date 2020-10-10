const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: "htpp://localhost:8080"
};

const db = require("./JWT Authentication/models");
const Role = db.role;

//sync memastikan express untuk mengeksekusi code pada bagian ini sebelum proses lain dapat berjalan
db.sequelize.sync({force:true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
  });

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//memastikan setiap routes yang dipanggil akan melalui proses authentikasi dahulu)
require('./JWT Authentication/routes/auth.routes')(app);
require('./JWT Authentication/routes/user.routes')(app);



const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log('Server is running on port ' + PORT);
});

//function yang dibutuhkan untuk membuat inisial user dan admin
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
  
