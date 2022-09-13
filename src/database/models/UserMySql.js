const { DataTypes } = require( "sequelize");
const sequelize = require( "../db.js");

const Users = sequelize.define('user', {

    live_support_token: {
        type: DataTypes.STRING,
      },   

      name: {
        type: DataTypes.STRING,
      },  

},{
  timestamps: false
});

const userModle = {}
userModle.User= Users;


module.exports= userModle;

