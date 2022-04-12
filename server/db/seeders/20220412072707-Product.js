'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Products', [
        {
          name: 'Пармезан',
          description: 'вкусный твердый сыр',
          price: '4000',
          img: 'https://macaronomania.ru/wp-content/uploads/2016/10/Parmezan-foto.jpg',
          category_id: 1,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Моцарелла',
          description: 'вкусная моцарелла',
          price: '3000',
          img: 'https://foodcity.ru/storage/products/November2018/S1avxlEfsfAwboyfFkLh.jpg',
          category_id: 2,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          name: 'Горгонзола',
          description: 'вкусная горгонзола',
          price: '3000',
          img: 'https://italy4.me/wp-content/uploads/2016/11/gorgonzola-2_cr.jpg',
          category_id: 3,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Камамбер',
          description: 'вкусный камамбер',
          price: '3000',
          img: 'https://chesom.com/image/cache/data/products/cheese/camembert-kuznetsov/camembert-kuznetsov-3-800x800.jpg',
          category_id: 4,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Камамбер козий',
          description: 'козий камамбер',
          price: '3050',
          img: 'https://chesom.com/image/cache/data/products/cheese/camembert-kuznetsov/camembert-kuznetsov-3-800x800.jpg',
          category_id: 5,
          seller_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Соус для сыра',
          description: 'прекрасный соус',
          price: '500',
          img: 'https://chesom.com/image/cache/data/products/cheese/camembert-kuznetsov/camembert-kuznetsov-3-800x800.jpg',
          category_id: 7,
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
