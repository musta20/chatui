const { DataTypes } = require( "sequelize");
const sequelize = require( "../db.js");

const Users = sequelize.define('user', {

    live_support_token: {
        type: DataTypes.STRING,
      },   

      name: {
        type: DataTypes.STRING,
      },  
      role_id:{
        type: DataTypes.INTEGER,

      }

},{
  timestamps: false
});

const userModle = {}
userModle.User= Users;


module.exports= userModle;

