'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('addresses', [
      // Hyderabad Addresses
      {
        lat: 17.385044,
        long: 78.486671,
        flat: 'Flat No. 101',
        area: 'Banjara Hills',
        landmark: 'Near Lumbini Park',
        pincode: '500034',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        placeId: 'ChIJK9jjdo8kHzsRZiAa1ZAz7Wc',
        locationType: 'Residential',
        formattedAddress: 'Flat No. 101, Banjara Hills, Near Lumbini Park, Hyderabad, Telangana, India',
        addressType: 'Home',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },
      {
        lat: 17.4545,
        long: 78.4367,
        flat: 'Flat No. 202',
        area: 'Madhapur',
        landmark: 'Near Cyber Towers',
        pincode: '500081',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        placeId: 'ChIJrXvnyQJr1zsRmHe3T1tJ5h0',
        locationType: 'Residential',
        formattedAddress: 'Flat No. 202, Madhapur, Near Cyber Towers, Hyderabad, Telangana, India',
        addressType: 'Home',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },
      
      // Pune Addresses
      {
        lat: 18.5204,
        long: 73.8567,
        flat: 'Flat No. 303',
        area: 'Koregaon Park',
        landmark: 'Near Osho Ashram',
        pincode: '411001',
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        placeId: 'ChIJOwg_06oBzzsRa0-y7y2qaTk',
        locationType: 'Residential',
        formattedAddress: 'Flat No. 303, Koregaon Park, Near Osho Ashram, Pune, Maharashtra, India',
        addressType: 'Home',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },
      {
        lat: 18.5445,
        long: 73.9290,
        flat: 'Flat No. 404',
        area: 'Viman Nagar',
        landmark: 'Near Phoenix Marketcity',
        pincode: '411014',
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        placeId: 'ChIJu8Qh3rsKzzsRgGpToX6I7O4',
        locationType: 'Commercial',
        formattedAddress: 'Flat No. 404, Viman Nagar, Near Phoenix Marketcity, Pune, Maharashtra, India',
        addressType: 'Office',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },

      // Bangalore Addresses
      {
        lat: 12.9716,
        long: 77.5946,
        flat: 'Flat No. 505',
        area: 'MG Road',
        landmark: 'Near Cubbon Park',
        pincode: '560001',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
        placeId: 'ChIJPdIuLzClYzsRYaRm0zZax6I',
        locationType: 'Commercial',
        formattedAddress: 'Flat No. 505, MG Road, Near Cubbon Park, Bangalore, Karnataka, India',
        addressType: 'Office',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },
      {
        lat: 12.9352,
        long: 77.6259,
        flat: 'Flat No. 606',
        area: 'Indiranagar',
        landmark: 'Near 100 Feet Road',
        pincode: '560038',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
        placeId: 'ChIJr3SviO1rYzsR3zKhkHqZxH8',
        locationType: 'Residential',
        formattedAddress: 'Flat No. 606, Indiranagar, Near 100 Feet Road, Bangalore, Karnataka, India',
        addressType: 'Home',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },

      // Gurgaon Addresses
      {
        lat: 28.4595,
        long: 77.0266,
        flat: 'Flat No. 707',
        area: 'Sector 52',
        landmark: 'Near DLF Cyber City',
        pincode: '122018',
        city: 'Gurgaon',
        state: 'Haryana',
        country: 'India',
        placeId: 'ChIJD7fiBh1u5DsR13b2r6jzxk8',
        locationType: 'Residential',
        formattedAddress: 'Flat No. 707, Sector 52, Near DLF Cyber City, Gurgaon, Haryana, India',
        addressType: 'Home',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },
      {
        lat: 28.4691,
        long: 77.0841,
        flat: 'Flat No. 808',
        area: 'Sector 56',
        landmark: 'Near HUDA City Centre',
        pincode: '122002',
        city: 'Gurgaon',
        state: 'Haryana',
        country: 'India',
        placeId: 'ChIJD6gH3xaZ5DsR3Hjgl1V5O_w',
        locationType: 'Commercial',
        formattedAddress: 'Flat No. 808, Sector 56, Near HUDA City Centre, Gurgaon, Haryana, India',
        addressType: 'Office',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },

      // Delhi Addresses
      {
        lat: 28.6139,
        long: 77.2090,
        flat: 'Flat No. 909',
        area: 'Connaught Place',
        landmark: 'Near Rajiv Chowk',
        pincode: '110001',
        city: 'Delhi',
        state: 'Delhi',
        country: 'India',
        placeId: 'ChIJeQ2fZs5u5DsRYu0_pzMEmdE',
        locationType: 'Commercial',
        formattedAddress: 'Flat No. 909, Connaught Place, Near Rajiv Chowk, Delhi, Delhi, India',
        addressType: 'Office',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },
      {
        lat: 28.7041,
        long: 77.1025,
        flat: 'Flat No. 1010',
        area: 'Saket',
        landmark: 'Near Select Citywalk Mall',
        pincode: '110017',
        city: 'Delhi',
        state: 'Delhi',
        country: 'India',
        placeId: 'ChIJBwCI8Rtq5DsRfi6Qxw2zLZ8',
        locationType: 'Residential',
        formattedAddress: 'Flat No. 1010, Saket, Near Select Citywalk Mall, Delhi, Delhi, India',
        addressType: 'Home',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
        deletedAt: null,
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
