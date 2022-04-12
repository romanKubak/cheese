'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categories', [
      {
        name: 'Твердые и полутвердые сыры',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Мягкие и рассольные сыры',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сыры с голубой плесенью',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сыры с белой плесенью',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сыры из козьего и овечьего молока',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сырные снеки',
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
