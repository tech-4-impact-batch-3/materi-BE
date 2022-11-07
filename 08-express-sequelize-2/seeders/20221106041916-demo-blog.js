'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("Blogs", [
      {
        title: "tips express",
        desc: "express adalah framework untuk nodeJS bla bla bla",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "belajar sequelize dari 0",
        desc: "sequelize itu ternnayta bla bbla bla",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "belajar mysql",
        desc: "mysql adalahh bla bbla bla",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("Blogs", null, {});
  }
};
