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
        title: 'Crocs & batter'
      },
      {
        userId: 1,
        imageUrl: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/02/ryan-and-michael-feature-the-office.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
        title: 'BFFs'
      },
      {
        userId: 1,
        imageUrl: 'https://www.hallofseries.com/wp-content/uploads/2020/12/The-Office-e1615447138425.jpg',
        title: "That's what she said!",

      },
      {
        userId: 1,
        imageUrl: 'https://areajugones.sport.es/wp-content/uploads/2021/11/1366-2000-1.jpg',
        title: "Who's going to be manager?"
      },
      {
        userId: 1,
        imageUrl: 'http://disneyplusbrasil.com.br/wp-content/uploads/2022/02/The-Office-Dwight-e-Jim.jpg',
        title: 'Teamwork'
      },
      {
        userId: 1,
        imageUrl: 'https://pyxis.nymag.com/v1/imgs/a91/fc7/63264599bc070bf398b8d59c1260c7cba9-23-the-office-fire-drill-scene.rhorizontal.w1100.jpg',
        title: 'Fire drill',

      },
      {
        userId: 1,
        imageUrl: 'https://centralrecorder.com/wp-content/uploads/2021/12/1638309962_Turns-Out-The-Office-Finale-Originally-Featured-A-Scene-That.jpg',
        title: 'Celebration'
      },
      {
        userId: 2,
        imageUrl: 'https://cdn.theatlantic.com/media/mt/culture_test/the%20office%20finale%20ending.jpg',
        title: 'Oscar'
      },
      {
        userId: 2,
        imageUrl: 'https://www.looper.com/img/gallery/the-office-scene-you-never-got-to-see-is-finally-available/michaels-toilet-tragedy-turns-to-toilet-humor-1641323770.jpg',
        title: 'ATTRM',

      },
      {
        userId: 2,
        imageUrl: 'https://pbs.twimg.com/media/A27pP9PCMAA937v.jpg',
        title: 'Squad'
      },
      {
        userId: 2,
        imageUrl: 'https://content.internetvideoarchive.com/content/hdphotos/8221/008221/008221_1097x617_842498_018.jpg',
        title: 'Perfectschlang'
      },
      {
        userId: 2,
        imageUrl: 'https://www.thewrap.com/wp-content/uploads/2021/01/office-1.jpg',
        title: 'Beach day',

      },
      {
        userId: 2,
        imageUrl: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/01/1.jpg',
        title: 'Dinner night'
      },
      {
        userId: 3,
        imageUrl: 'https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/BKOtf8e2RjJ_7_aNRBgqCHsECgs=/1024x768/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/S6HX7ALWAJEWDNC5IVOMW3GOBY.jpg',
        title: 'Tennis'
      },
      {
        userId: 3,
        imageUrl: 'https://cdn3.whatculture.com/images/2019/08/962dd71560dc2d5a-600x338.jpg',
        title: 'Goodbye Michael',

      },
      {
        userId: 3,
        imageUrl: 'https://www.nme.com/wp-content/uploads/2021/05/The-Office-proposal.jpg',
        title: 'Proposal'
      },
      {
        userId: 4,
        imageUrl: 'https://www.looper.com/img/gallery/the-one-scene-the-office-cast-almost-couldnt-film/intro-1576611044.jpg',
        title: 'Tuxedo'
      },
      {
        userId: 4,
        imageUrl: 'https://i.pinimg.com/736x/23/75/ee/2375eedba6fe4f99165d22740d5013b7.jpg',
        title: 'Clarice ?'
      },
      {
        userId: 4,
        imageUrl: 'https://www.cheatsheet.com/wp-content/uploads/2020/08/the-office-scene-made-cast-break-1200x735.jpg',
        title: 'Dinner time'
      },
      {
        userId: 4,
        imageUrl: 'https://i.pinimg.com/originals/4f/3e/48/4f3e48fa0a7e5e09eaf93ba5fe155d2d.jpg',
        title: 'On set',

      },
      {
        userId: 4,
        imageUrl: 'https://s.studiobinder.com/wp-content/uploads/2020/03/The-Office-Script-Teardown-Featured-StudioBinder.jpg',
        title: 'Season 1 poster'
      },
      {
        userId: 4,
        imageUrl: 'https://www.hollywoodreporter.com/wp-content/uploads/2012/09/office_new_guys.jpg',
        title: 'Mini Dwight'
      },
      {
        userId: 4,
        imageUrl: 'https://external-preview.redd.it/iSiL6VTNId_B7PF4xQrvcuLss9BROsZBvL_nXqlEbFM.jpg?auto=webp&s=5e026084fb5beb9332a2cfe3483a907d2424624f',
        title: 'Meredith ?',

      },
      {
        userId: 4,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTgxNzA4NDY4NF5BMl5BanBnXkFtZTcwNzI2MTY0OQ@@._V1_FMjpg_UX1000_.jpg',
        title: 'Fire Drill!!'
      },
      {
        userId: 4,
        imageUrl: 'https://www.looper.com/img/gallery/bloopers-in-the-office-that-were-better-than-the-original-scene/l-intro-1608580838.jpg',
        title: "World's best boss"
      },
      {
        userId: 4,
        imageUrl: 'https://static.wikia.nocookie.net/theoffice/images/9/9e/Bald_Meredith.jpg/revision/latest/scale-to-width-down/1920?cb=20210304190858',
        title: 'meredith !!',

      },
      {
        userId: 4,
        imageUrl: 'https://static.wikia.nocookie.net/bace1cce-2958-4de5-a1b7-60212124d36d/scale-to-width/755',
        title: 'Locked out'
      },
      {
        userId: 4,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDEwZmZjYTEtZDNiZC00MDg3LWI1M2UtNTM1NDc3MjVmY2I4XkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg',
        title: 'Office safety officer'
      },
      {
        userId: 4,
        imageUrl: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/08/Angela-Meredith-Phyllis-Pam-And-Michael-From-The-Office.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5://assets.vogue.com/photos/5f47c140158c4d94d6bd8072/16:9/w_1280,c_limit/officesocial.jpg',
        title: 'Ladies man',

      },
      {
        userId: 4,
        imageUrl: 'https://www.tvinsider.com/wp-content/uploads/2020/03/the-office-15-2-1014x570.jpg',
        title: 'Prison Mike'
      },
      {
        userId: 4,
        imageUrl: 'https://static.fandomspot.com/images/05/6404/00-featured-kevin-spills-chili-the-office.jpg',
        title: 'This is what I do best'
      },
      {
        userId: 4,
        imageUrl: 'https://cdn.mos.cms.futurecdn.net/WpLYfyPnuLgbdzAQhrKeZj-1200-80.jpg',
        title: 'Field trip to Uthica',

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
    return queryInterface.bulkDelete('Images', null, {});
  }
};
