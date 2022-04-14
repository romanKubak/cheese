'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Products', [
        {
          name: 'Человек паук',
          description: 'Статуэтка человека паука. Вообще кайфовая',
          price: '4000',
          img: '380611_aS54H9DqPX_spider_man_advanced_suit_marvel.jpeg',
          subCategory_id: 1,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Железный человек',
          description: 'Статуэтка железного человека',
          price: '3000',
          img: 'Mk50-Ironman-Mark50.jpg_q50.970.jpg',
          subCategory_id: 1,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          name: 'Железный человек 1987г.',
          description: 'Оригинальный комикс железного человека',
          price: '3000',
          img: 'ironMenComics.png',
          subCategory_id: 2,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Халк 1998г.',
          description: 'Оригинальный комикс Халк',
          price: '3000',
          img: '70682025.jpeg',
          subCategory_id: 2,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Футболка с Тором',
          description: 'Оригинальный мерч',
          price: '2000',
          img: 'large_ThorFury.jpeg',
          subCategory_id: 3,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Плакат со Мстителями',
          description: 'Мстители финал',
          price: '1000',
          img: '567177.jpeg',
          subCategory_id: 4,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Статуэтка Бутмана',
          description: 'Богатый чел',
          price: '3000',
          img: 'batman-begins-batman-110-scale-statue-iron-studios_dc-comics_silo.png',
          subCategory_id: 5,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Комикс Сумермена',
          description: 'Древний оригинальный комикс',
          price: '3000',
          img: 'Superman-204.jpeg',
          subCategory_id: 6,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Products', null, {});
  }
};
