'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'other'),
        allowNull: true, // Optional field
      },
      // addressId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: true, // Optional field
      //   references: {
      //     model: 'addresses', // References the 'addresses' table
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL',
      // },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true, // Soft delete column
      },
    });

    // await queryInterface.addColumn('users', 'addressId', {
    //   type: Sequelize.INTEGER,
    //   allowNull: true, // Optional field
    //   references: {
    //     model: 'addresses', // Name of the referenced table
    //     key: 'id', // Primary key in the referenced table
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'SET NULL', // Address can be set to NULL when deleted
    // });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
