// 
'use strict';
module.exports = (sequelize, DataTypes) => {
  const burger_type = sequelize.define('burger_type', {
    burger_name: DataTypes.STRING,
  }, {});
  burger_type.associate = function(models) {
    // associations can be defined here
  };
  return burger_type;
};
