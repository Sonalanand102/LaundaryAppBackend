'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('vendor_services', 'serviceId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'services', // Name of the referenced table
        key: 'id', // Primary key in the referenced table
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('vendor_services', 'serviceId');
  },
};
