'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
       name: 'John Doe',
       password: '12345',
       email: '123@mail.ru',
       isSeller: true,
       createdAt: new Date(),
       updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
