'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      lat: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: true,
      },
      long: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: true,
      },
      flat: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      landmark: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pincode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      placeId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      locationType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      formattedAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      addressType: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    {
      tableName: 'addresses',
      timestamps: true,
      // paranoid: true, 
      // underscored: true,
      createdAt: 'created_at', // Map the createdAt column
      updatedAt: 'updated_at', // Map the updatedAt column
      // deletedAt: 'deleted_at',
    }, {
      sequelize,
      modelName: 'Address',
    }
  );

  Address.associate = (models) => {
    // Define associations, if any
  };

  return Address;
};
