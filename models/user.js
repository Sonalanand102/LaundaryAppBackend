'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Define associations here
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Association with Address model
      User.belongsTo(models.Address, {
        foreignKey: 'addressId', // Foreign key in the User table
        as: 'address', // Alias for the association
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }

  User.init(
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
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: true,
      },
      addressId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'addresses', // references the 'addresses' table
          key: 'id',
        },
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true,
      // paranoid: true, // For soft deletes (deleted_at)
      createdAt: 'created_at', // Map the createdAt column
      updatedAt: 'updated_at', // Map the updatedAt column
      // deletedAt: 'deleted_at',
    }
  );

  return User;
};
