//Sequelize adalah ORM database yang mempermudah pemetaan data menjadi objek 
//fungsi nya adalah untuk mempermudah interaksi dengan database MySQL yang membuat data dalam table langsung terintegrasi menjadi objek
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Role;
  };