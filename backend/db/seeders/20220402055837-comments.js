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
    return queryInterface.bulkInsert('Comments', [{
      userId: 1,
      comment: 'love this picture!',
      imageId: 1
    },
    {
      userId: 1,
      comment: 'fun times',
      imageId: 1
    },
    {
      userId: 2,
      comment: 'Can not believe how long it has been',
      imageId: 1
    },
    {
      userId: 2,
      comment: 'the office is the best show',
      imageId: 1
    },
    {
      userId: 2,
      comment: 'thats what she said',
      imageId: 1
    },
    {
      userId: 3,
      comment: 'bears, beeds, battlestar galactica',
      imageId: 2
    },
    {
      userId: 3,
      comment: 'I am not supersticious, just a little sticious',
      imageId: 2
    },
    {
      userId: 3,
      comment: 'Diversity tomorrow, because today is almost over',
      imageId: 3
    },
    {
      userId: 3,
      comment: 'I am beyoncee always',
      imageId: 3
    },
    {
      userId: 3,
      comment: 'I talk a lot, so I have learned to tune myself out.',
      imageId: 3
    },
    {
      userId: 3,
      comment: 'Would I rather be feared or loved?',
      imageId: 4
    },
    {
      userId: 3,
      comment: 'f I don not have some cake soon, I might die',
      imageId: 4
    },
    {
      userId: 3,
      comment: 'If you didnt already know, prison isnt a fun place',
      imageId: 4
    },
    {
      userId: 3,
      comment: 'love this picture!',
      imageId: 4
    },
    {
      userId: 3,
      comment: 'Would Smokey Bear be proud?',
      imageId: 4
    },
    {
      userId: 3,
      comment: 'Where is the line drawn on quality of life?',
      imageId: 4
    },
    {
      userId: 3,
      comment: 'I am running away from my responsibilities. And it feels good.',
      imageId: 5
    },
    ,
    {
      userId: 1,
      comment: 'I just want to lie on the beach and eat hot dogs. Thats all Ive ever wanted..',
      imageId: 5
    },
    {
      userId: 1,
      comment: 'And I knew exactly what to do. But in a much more real sense, I had no idea what to do.',
      imageId: 5
    },
    {
      userId: 1,
      comment: 'There is a lot of beauty in ordinary things. Isnt that kind of the point?.',
      imageId: 5
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
