'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('SubCategories', [
        {
          title: 'Статуэтки',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Комиксы',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          title: 'Одежда',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Плакаты',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Статуэтки',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Комиксы',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Одежда',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Плакаты',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Палочки',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Книги',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Постеры',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Модели авто',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Постеры',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Автографы',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Книги с цитатами',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Статуэтки',
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Костюмы',
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Диски',
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кружки',
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Одежда',
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Разное',
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('SubCategories', null, {});
  }
};
