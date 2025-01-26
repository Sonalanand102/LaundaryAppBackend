'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define(
    'Vendor',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      addressId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    {
      tableName: 'vendors',
      timestamps: true,
      // paranoid: true, // Enable soft deletes (deleted_at)
      createdAt: 'created_at', // Map the createdAt column
      updatedAt: 'updated_at', // Map the updatedAt column
      // deletedAt: 'deleted_at',
    }
  );

  Vendor.associate = (models) => {
    // Vendor belongs to Address
    Vendor.belongsTo(models.Address, {
      foreignKey: 'addressId',
      as: 'address',
    });

    Vendor.belongsToMany(models.Service, {
      through: models.VendorService,
      as: 'services',
      foreignKey: 'vendorId',
    });

  };

  return Vendor;
};
