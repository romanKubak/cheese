'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('Baskets', [
      {
        product_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Baskets', null, {});
     */
     await queryInterface.bulkDelete('Baskets', null, {});
  }
};
