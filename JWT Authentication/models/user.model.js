//Sequelize adalah ORM database yang mempermudah pemetaan data menjadi objek 
//fungsi nya adalah untuk mempermudah interaksi dengan database MySQL yang membuat data dalam table langsung terintegrasi menjadi objek
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phonenumber: {
          type: Sequelize.STRING
      },
      gender: {
          type: Sequelize.STRING
      },
      dob: {
          type: Sequelize.DATE
      }
    });
  
    return User;
  };