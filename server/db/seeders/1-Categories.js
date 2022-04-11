'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Музыка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Шуточная',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мультфильмы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Весна',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Космос',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
