'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        name: 'Ads',
        description: 'Tecnologia',
        createdAt: new Date (),
        updatedAt: new Date ()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.buldDelete(Courses,{name: 'Ads'}, {})
  }
};
