'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('songs', [
      { "id": 1, "name": "Blinding Lights", "year": 2019, "linkYT": "https://www.youtube.com/watch?v=4NRXx6U8ABQ", "artistId": 1, "genreId": 1, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 2, "name": "The Twist", "year": 1960, "linkYT": "https://www.youtube.com/watch?v=-CCgDvUM4TM", "artistId": 2, "genreId": 2, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 3, "name": "Smooth", "year": 1999, "linkYT": "https://www.youtube.com/watch?v=6Whgn_iE5uc", "artistId": 3, "genreId": 3, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 4, "name": "Mack the Knife", "year": 1959, "linkYT": "https://www.youtube.com/watch?v=4jcCwmtVAIM", "artistId": 4, "genreId": 4, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 5, "name": "Uptown Funk", "year": 2015, "linkYT": "https://www.youtube.com/watch?v=OPf0YbXqDm0", "artistId": 5, "genreId": 5, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 6, "name": "How Do I Live", "year": 1997, "linkYT": "https://www.youtube.com/watch?v=MUFasKZcH_c", "artistId": 6, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 7, "name": "Party Rock Anthem", "year": 2011, "linkYT": "https://www.youtube.com/watch?v=KQ6zr6kCPj8", "artistId": 7, "genreId": 7, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 8, "name": "I Gotta Feeling", "year": 2009, "linkYT": "https://www.youtube.com/watch?v=uSD4vsh1zDA", "artistId": 8, "genreId": 8, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 9, "name": "Macarena", "year": 1996, "linkYT": "https://www.youtube.com/watch?v=zWaymcVmJ-A", "artistId": 9, "genreId": 9, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 10, "name": "Shape of You", "year": 2017, "linkYT": "https://www.youtube.com/watch?v=JGwWNGJdvx8", "artistId": 10, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 11, "name": "Breath", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=yCmsZUN4r_s", "artistId": 11, "genreId": 10, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 12, "name": "Maria Maria", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=nPLV7lGbmT4", "artistId": 3, "genreId": 11, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 13, "name": "I wanna know", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=dJ8VjyPw0qY", "artistId": 12, "genreId": 12, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 14, "name": "Everthing you want", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=FwTQOPZvY3s", "artistId": 13, "genreId": 13, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 15, "name": "Say My Name", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=sQgd6MccwZc", "artistId": 14, "genreId": 12, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 16, "name": "I Knew I Loved You", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=jjnmICxvoVY", "artistId": 15, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 17, "name": "Amazed", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=x-skFgrV59A", "artistId": 16, "genreId": 10, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 18, "name": "Bent", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=969RAKkYESU", "artistId": 17, "genreId": 14, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 19, "name": "He Wasn't Man Enough", "year": 2000, "linkYT": "https://www.youtube.com/watch?v=9_hKXk2qSuw", "artistId": 18, "genreId": 12, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 20, "name": "Irreplaceable", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=2EwViQxSJJQ", "artistId": 19, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 21, "name": "Umbrella", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=CvBfHwUxHIk", "artistId": 20, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 22, "name": "The Sweet Escape", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=O0lf_fE3HwA", "artistId": 21, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 23, "name": "Big Girls Don't Cry", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=agrXgrAgQ0U", "artistId": 22, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 24, "name": "Buy U a Drank(Shawty Snappin)", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=dBrRBZy8OTs", "artistId": 23, "genreId": 12, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 25, "name": "Before He Cheats", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=WaSy8yy-mr8", "artistId": 24, "genreId": 10, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 26, "name": "Hey There Delilah", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=haKsKpWyTw4", "artistId": 24, "genreId": 13, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 27, "name": "I Wanna Love You", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=GJzF7H2e3Tw", "artistId": 26, "genreId": 15, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 28, "name": "Say It Right", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=6JnGBs88sL0", "artistId": 27, "genreId": 6, "userId": null, "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 29, "name": "Glamorous", "year": 2007, "linkYT": "https://www.youtube.com/watch?v=q0SyUgw98tE", "artistId": 22, "genreId": 11, "userId": null, "createdAt": new Date(), "updatedAt": new Date() }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('songs', null, {});
  }
};
