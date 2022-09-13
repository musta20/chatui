const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('dbname', 'nam', 'pass', {
  host: 'host',
  dialect:  'mysql' 
});



 
module.exports= sequelize;

 

