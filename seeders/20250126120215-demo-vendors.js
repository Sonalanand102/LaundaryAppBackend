'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vendors', [
      {
        name: 'Speedy Cleaners',
        email: 'speedycleaners@example.com',
        phone: '9876543210',
        gender: 'male',
        dob: new Date('1985-03-20'),
        addressId: 1,  // Assuming address ID 1 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'Speedy Cleaners offers top-notch laundry services with quick turnarounds.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fresh & Clean Laundry',
        email: 'freshclean@example.com',
        phone: '1122334455',
        gender: 'female',
        dob: new Date('1990-07-25'),
        addressId: 2,  // Assuming address ID 2 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'Fresh & Clean Laundry provides premium laundry and dry cleaning services.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'The Laundrette',
        email: 'laundrette@example.com',
        phone: '2233445566',
        gender: 'male',
        dob: new Date('1982-09-12'),
        addressId: 3,  // Assuming address ID 3 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'The Laundrette offers convenient self-service washing and premium laundry services.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'EcoWash Laundry',
        email: 'ecowash@example.com',
        phone: '3344556677',
        gender: 'female',
        dob: new Date('1995-11-15'),
        addressId: 4,  // Assuming address ID 4 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'EcoWash Laundry specializes in eco-friendly laundry services using green cleaning agents.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Royal Laundry',
        email: 'royallaundry@example.com',
        phone: '4455667788',
        gender: 'male',
        dob: new Date('1988-06-30'),
        addressId: 5,  // Assuming address ID 5 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'Royal Laundry is known for its premium laundry and ironing services.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Quick Clean Laundry',
        email: 'quickclean@example.com',
        phone: '5566778899',
        gender: 'female',
        dob: new Date('1992-04-10'),
        addressId: 6,  // Assuming address ID 6 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'Quick Clean Laundry offers fast and efficient laundry services with doorstep delivery.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Laundry Masters',
        email: 'laundrymasters@example.com',
        phone: '6677889900',
        gender: 'male',
        dob: new Date('1980-12-05'),
        addressId: 7,  // Assuming address ID 7 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'Laundry Masters provides expert dry cleaning and garment care services.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luxe Laundry',
        email: 'luxelaundry@example.com',
        phone: '7788990011',
        gender: 'female',
        dob: new Date('1983-08-19'),
        addressId: 8,  // Assuming address ID 8 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'Luxe Laundry offers high-end laundry and pressing services.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Clean Express Laundry',
        email: 'cleanexpress@example.com',
        phone: '8899001122',
        gender: 'male',
        dob: new Date('1991-10-30'),
        addressId: 9,  // Assuming address ID 9 exists
        images: [
          'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 
          'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs='
        ],
        description: 'Clean Express Laundry provides express laundry services for busy professionals.',
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vendors', null, {});
  }
};
