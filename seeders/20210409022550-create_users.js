'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];

    for (let i = 0; i <= 100; i++) {
      data.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
      });
    }

    await queryInterface.bulkInsert('users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
