'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vendor_services', [
      { vendorId: 1, serviceId: 1, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 1, serviceId: 2, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 2, serviceId: 3, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 2, serviceId: 4, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 3, serviceId: 5, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 3, serviceId: 6, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 4, serviceId: 7, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 4, serviceId: 8, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 5, serviceId: 9, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 5, serviceId: 10, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 6, serviceId: 1, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 6, serviceId: 3, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 7, serviceId: 4, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 7, serviceId: 2, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 8, serviceId: 5, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 8, serviceId: 9, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 9, serviceId: 6, status: true, created_at: new Date(), updated_at: new Date() },
      { vendorId: 9, serviceId: 10, status: true, created_at: new Date(), updated_at: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendor_services', null, {});
  }
};
