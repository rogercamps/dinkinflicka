'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, { foreignKey: 'userId'})
    Image.hasMany(models.Comment, { foreignKey: 'imageId',hooks: true, onDelete: 'cascade'})
    Image.hasMany(models.Favorite, { foreignKey: 'favoriteId'})
  };
  return Image;
};
