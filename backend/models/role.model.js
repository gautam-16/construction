const {Sequelize,DataTypes, ARRAY}=require('sequelize')
const sequelize=require('../server')

const createTableRole= sequelize.define('Role',{
  rolename:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true

},
level:{
  type:Sequelize.DataTypes.INTEGER,
  allowNull:false
},
department:{type:Sequelize.DataTypes.STRING}
},
{
  freezeTableName: true
});
module.exports=createTableRole;