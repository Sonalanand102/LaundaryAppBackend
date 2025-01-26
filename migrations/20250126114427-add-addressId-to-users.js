'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'addressId', {
      type: Sequelize.INTEGER,
      allowNull: true, // Optional field
      references: {
        model: 'addresses', // Name of the referenced table
        key: 'id', // Primary key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // Address can be set to NULL when deleted
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'addressId');
  },
};
