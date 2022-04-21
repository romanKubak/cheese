'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'Marvel',
        img: 'MARVEL.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'DC - Detective Comics',
        img: 'DC.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Гарри Поттер',
        img: 'HARRY_POTER.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Форсаж',
        img: 'FORSAJ.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Звездные войны',
        img: 'STAR_WARS.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дополнительные товары',
        img: 'ANY.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
    ], {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
