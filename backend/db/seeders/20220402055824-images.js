'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        imageUrl: 'https://assets.vogue.com/photos/5f47c140158c4d94d6bd8072/16:9/w_1280,c_limit/officesocial.jpg',
        title: 'Roasted',

      },
      {
        userId: 1,
        imageUrl: 'https://pbs.twimg.com/media/A27pP9PCMAA937v.jpg',
        title: 'Roasted'
      },
      {
        userId: 1,
        imageUrl: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/02/ryan-and-michael-feature-the-office.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
        title: 'Roasted'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('Images', null, {});
  }
};
