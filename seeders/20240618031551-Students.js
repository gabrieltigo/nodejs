'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        firstName: 'Gabriel',
        lastName: 'Bastos',
        coursesId: 1,
        createdAt: new Date (),
        updatedAt: new Date ()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.buldDelete(Courses,{name: 'Ads'}, {})
  }
};
