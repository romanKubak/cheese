'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('SubCategories', [
        {
          title: 'Статуэтки',
          img: 'M_CAT_01.png',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Комиксы',
          img: 'M_CAT_02.png',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          title: 'Одежда',
          img: 'M_CAT_03.png',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Плакаты',
          img: 'M_CAT_04.png',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пазлы',
          img: 'M_CAT_05.png',
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Термосы и другое',
          img: 'M_CAT_06.png',
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
          title: 'Cтатуэтки',
          img: 'HP_main_St.jpeg',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Палочки',
          img: 'HP_main_Palki.jpeg',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Книги',
          img: 'HP_main_books.png',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Постеры',
          img: 'HP_main_poster.png',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Одежда',
          img: 'HP_main_shoes.jpeg',
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Разное',
          img: 'HP_main_anything.jpeg',
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
