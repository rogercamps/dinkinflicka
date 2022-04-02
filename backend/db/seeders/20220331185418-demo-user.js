'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'michael@dm.com',
        username: 'PrisonMike',
        hashedPassword: bcrypt.hashSync('dementors')
      },
      {
        email: 'creed@dm.io',
        username: 'Boboddy',
        hashedPassword: bcrypt.hashSync('creed')
      },
      {
        email: 'darryl@dm.io',
        username: 'Mach5',
        hashedPassword: bcrypt.hashSync('darryl')
      },
      {
        email: 'kevin@dm.io',
        username: 'KevMalone',
        hashedPassword: bcrypt.hashSync('kevin')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['PrisonMike', 'Boboddy', 'Mach5', 'KevMalone'] }
    }, {});
  }
};
