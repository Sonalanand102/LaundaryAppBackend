'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Adjusted for array of strings
      allowNull: true, // Optional field
    },
    description: {
      type: DataTypes.TEXT, // Adjusted to TEXT for longer descriptions
      allowNull: true, // Optional field
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    tableName: 'services', // Specify the table name
    timestamps: true, // Enable timestamps (createdAt, updatedAt)
    // paranoid: true, // Enable soft deletes (deletedAt)
    createdAt: 'created_at', // Map the createdAt column
    updatedAt: 'updated_at', // Map the updatedAt column
    // deletedAt: 'deleted_at',
  });

  Service.associate = function(models) {
    // Define associations here if necessary
    Service.belongsToMany(models.Vendor, {
      through: models.VendorService,
      as: 'vendors',
      foreignKey: 'serviceId',
    });
  };

  return Service;
};
