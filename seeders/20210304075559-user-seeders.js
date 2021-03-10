'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Panji BP',
        profession: 'Back-end Developer',
        role: 'admin',
        email: 'panji@gmail.com',
        password: await bcrypt.hash('panjiaja', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Iqbals',
        profession: 'Front-end Developer',
        role: 'student',
        email: 'iqbal@gmail.com',
        password: await bcrypt.hash('iqbalaja', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
