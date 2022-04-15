'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('SubCategories', [
        {
          title: 'Статуэтки',
          img: 'no_img.jpeg',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Комиксы',
          img: 'no_img.jpeg',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          title: 'Одежда',
          img: 'no_img.jpeg',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Плакаты',
          img: 'no_img.jpeg',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Статуэтки',
          img: 'no_img.jpeg',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Комиксы',
          img: 'no_img.jpeg',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Одежда',
          img: 'no_img.jpeg',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Плакаты',
          img: 'no_img.jpeg',
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Палочки',
          img: 'no_img.jpeg',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Книги',
          img: 'no_img.jpeg',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Постеры',
          img: 'no_img.jpeg',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Модели авто',
          img: 'no_img.jpeg',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Постеры',
          img: 'no_img.jpeg',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Автографы',
          img: 'no_img.jpeg',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Книги с цитатами',
          img: 'no_img.jpeg',
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Статуэтки',
          img: 'no_img.jpeg',
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Костюмы',
          img: 'no_img.jpeg',
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Диски',
          img: 'no_img.jpeg',
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Кружки',
          img: 'no_img.jpeg',
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Одежда',
          img: 'no_img.jpeg',
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Разное',
          img: 'no_img.jpeg',
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
