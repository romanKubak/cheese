'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'Marvel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DC - Detective Comics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Форсаж',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Звездные войны',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дополнительные товары',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ], {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
