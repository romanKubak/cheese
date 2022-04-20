'use strict';
// harry poter category_id = 3
//! harry poter статуэтки subCategory_id = 
module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Products', [
        {
          name: 'Гарри Потер',
          description: 'Статуэтка Гарри Потер. Вообще кайфовая',
          price: '3000',
          img: 'HP_S_01.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Гермиона Грейнджер',
          description: 'Статуэтка Гермионы Грейнджер. Новая',
          price: '3000',
          img: 'HP_S_02.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          name: 'Джинни и Рон Уизли',
          description: 'Набор фигурок',
          price: '6000',
          img: 'HP_S_03.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Альбус Дамблдор',
          description: 'Кукла Дамблдор, 30 см',
          price: '5000',
          img: 'HP_S_04.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Чжоу',
          description: 'Статуэтка Чжоу, 30 см',
          price: '2000',
          img: 'HP_S_05.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Волан-де-Морт',
          description: 'Крутой чел',
          price: '1000',
          img: 'HP_S_06.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
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

//! harry poter палочки :
module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Products', [
        {
          name: 'Палочка Гарри Поттера',
          description: 'Сувенирная, на Хэллоуин',
          price: '3000',
          img: 'HP_Palka_01.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Волшебная палочка',
          description: 'С подсветкой (батарейки в комплекте)',
          price: '3000',
          img: 'HP_Palka_02.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          name: 'Палка Топ',
          description: 'Коллекционная, в подарочной коробке',
          price: '6500',
          img: 'HP_Palka_03.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палочка Северус Снейп',
          description: 'палочка декана факультета Слизерин',
          price: '4600',
          img: 'HP_Palka_04.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палочка Римус Люпин',
          description: 'Палочка учителя Защиты от темных искусств',
          price: '3700',
          img: 'HP_Palka_05.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
          seller_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Палочка Дамблдора',
          description: 'Палочка профессора Дамблдора',
          price: '5600',
          img: 'HP_Palka_06.png',
          statusSeller: false,
          statusClient: false,
          subCategory_id: 12,
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
