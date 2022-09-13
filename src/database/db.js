const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('sadnah_dokan', 'mustafa', 'Aa@123456', {
  host: 'localhost',
  dialect:  'mysql' 
});



 
module.exports= sequelize;

 

