'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    Example:
      await queryInterface.bulkInsert('Products', [
        {
          name: 'Пармезан',
          description: 'вкусный твердый сыр',
          price: '4000',
          img: '11f07386-a775-4039-aaf5-afa58669db07.jpg',
          category_id: 1,
         
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Моцарелла',
          description: 'вкусная моцарелла',
          price: '3000',
          img: '20747403-6e5b-4adc-968e-debf993d4b81.jpg',
          category_id: 2,
         
          createdAt: new Date(),
          updatedAt: new Date(),
          },
        {
          name: 'Горгонзола',
          description: 'вкусная горгонзола',
          price: '3000',
          img: '1225d43a-0bec-4b34-87d2-730b41d99268.jpg',
          category_id: 3,
         
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Камамбер',
          description: 'вкусный камамбер',
          price: '3000',
          img: '266d1dc1-2d4b-4ce4-86b4-e25d5495bc7f.jpg',
          category_id: 4,
    
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Камамбер козий',
          description: 'козий камамбер',
          price: '3050',
          img: 'e64fc8e3-05a9-4691-ac7a-6a3bf1b1eb65.jpg',
          category_id: 5,
      
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Соус для сыра',
          description: 'прекрасный соус',
          price: '500',
          img: '60206074-a15d-4f04-99b1-b7d747dc1cf3.jpg',
          category_id: 7,
          
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Products', null, {});
  }
};
