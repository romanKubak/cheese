'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'Marvel',
        img: 'logo-marvel-1.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DC - Detective Comics',
        img: 'DC_Comics_logo.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер',
        img: 'Harry-Potter-Logo.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Форсаж',
        img: 'fors_logo.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Звездные войны',
        img: 'star-wars-logo.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дополнительные товары',
        img: 'other.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ], {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
