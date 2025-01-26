'use strict';
module.exports = (sequelize, DataTypes) => {
  const VendorService = sequelize.define(
    'VendorService',
    {
      vendorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    {
      tableName: 'vendor_services',
      timestamps: true,
      // paranoid: true, // Enable soft deletes (deleted_at)
      createdAt: 'created_at', // Map the createdAt column
      updatedAt: 'updated_at', // Map the updatedAt column
      // deletedAt: 'deleted_at',
    }
  );

  VendorService.associate = (models) => {
    // VendorService belongs to Vendor
    VendorService.belongsTo(models.Vendor, {
      foreignKey: 'vendorId',
      as: 'vendor',
    });

    // VendorService belongs to Service
    VendorService.belongsTo(models.Service, {
      foreignKey: 'serviceId',
      as: 'service',
    });
  };

  return VendorService;
};
