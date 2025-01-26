'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
        name: 'Wash',
        description: 'Basic washing of clothes without any additional services.',
        price: 50.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Wash & Fold',
        description: 'Wash clothes and fold them neatly.',
        price: 75.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Dry Cleaning',
        description: 'Special cleaning for delicate fabrics that can\'t be washed with water.',
        price: 150.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ironing',
        description: 'Iron clothes to remove wrinkles and make them look crisp.',
        price: 30.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Wash & Ironing',
        description: 'Wash clothes and iron them to remove wrinkles.',
        price: 100.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Stain Removal',
        description: 'Special treatment for removing stubborn stains from clothes.',
        price: 40.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Duvet Cleaning',
        description: 'Cleaning of large items like duvets, comforters, and blankets.',
        price: 200.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Steam Cleaning',
        description: 'Cleaning with steam for delicate fabrics that can\'t be washed traditionally.',
        price: 120.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Curtain & Upholstery Cleaning',
        description: 'Cleaning services for curtains, carpets, and upholstery.',
        price: 180.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Shirt Wash & Press',
        description: 'Wash and press shirts for a crisp and clean finish.',
        price: 60.00,
        image: Sequelize.literal("ARRAY[ 'https://media.gettyimages.com/id/1486049233/photo/basket-with-laundry-and-washing-machine.jpg?s=1024x1024&w=gi&k=20&c=P7EMGWM0YCFAWXxnGab5S4sQAWyHgQilfrWUGYOWiLM=', 'https://media.gettyimages.com/id/1358813773/photo/laundry-close-up-of-clothes-in-washing-machine.jpg?s=2048x2048&w=gi&k=20&c=Q5baFtuMqBbcVCgLp9a8Wc4WOierUDoOdzI6OSeovCs=' ]"),
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {});
  }
};
