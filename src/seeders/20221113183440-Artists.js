'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('artists', [
      { "id": 1, "name": "The Weeknd", "country": "Canada", "ytchannel": "https://www.youtube.com/channel/UC0WP5P-ufpRfjbNrmOWwLBQ", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 2, "name": "Chubby Checker", "country": "US", "ytchannel": "https://www.youtube.com/channel/UC9174PS-AngzlCbgFlv9uWQ", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/67c3fa09abe368ed5b3996b5b8b9a1a8/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 3, "name": "Santana", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCI7pNDDat9jR8TjgF48aBDA", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/12c4d5efef7a0fad494e1acff7213542/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 4, "name": "Bobby Darin", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCj_otreRPRMynq2_gZj9s3w", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/90a66fdc89893828f1df70c1f6e594b2/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 5, "name": "Mark Ronson", "country": "UK", "ytchannel": "https://www.youtube.com/channel/UCSY5V7BJSrxNvvBF0Drslow", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/cacdbfdf5fa8c600eadc3e1c2b6ac8c8/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 6, "name": "LeAnn Rimes", "country": "US", "ytchannel": "https://www.youtube.com/channel/UC59d_iEW_aUgWyKAqRnj1xg", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/eb10a457cc62298a81e99c89167a8f7c/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 7, "name": "LMFAO", "country": "US", "ytchannel": "https://www.youtube.com/user/LMFAOVEVO", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/6d8cf808973d0b6570d0b7acc27bb686/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 8, "name": "The Black Eyed Peas", "country": "US", "ytchannel": "https://www.youtube.com/results?search_query=the+black+eyed+peas", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/367125d3998b16d8c86cbe25ec9e9648/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 9, "name": "Los del Río", "country": "Spain", "ytchannel": "https://www.youtube.com/user/LosDelRioVEVO", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/cc8212d93f11c94cc2653d848e3548ea/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 10, "name": "Ed Sheeran", "country": "England", "ytchannel": "https://www.youtube.com/channel/UC0C-w0YjGpqDXGB8IHb662A", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 11, "name": "Faith Hill", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCrgWiquB-NYsL3O6D-Lm9_A", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/cc9442766114216f5266709636f89509/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 12, "name": "Joe", "country": "US", "ytchannel": "https://www.youtube.com/user/JoeVEVO", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/fac31b57fe65c6801a976c78d45c652e/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 13, "name": "Vertical Horizon", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCBMoHtYNfZkQ0x5nc3NNwMg", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/b84632ce7503a899c60a2ebc0673f737/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 14, "name": "Destiny's Child", "country": "US", "ytchannel": "https://www.youtube.com/channel/UC2064-GFZ1y5NYZuUGX4iEA", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/c4df3f91071844856d335bacd4017696/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 15, "name": "Savage Garden", "country": "Australia", "ytchannel": "https://www.youtube.com/channel/UCVjBBKmklyAiWukoTU1vHRg", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/f3673f91aaa45309eb91e0cb0cf6a495/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 16, "name": "Lonestar", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCOk9HVaKq7MVfTgPfsCtKRg", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/6332d3a90d574ad824f60ec06769cd0d/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 17, "name": "Matchbox Twenty", "country": "US", "ytchannel": "https://www.youtube.com/channel/UC3Xu7mc5Zzep3lV17hqbs5A", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/c1ee18685c9ac5fc714d0c39dbc75f08/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 18, "name": "Toni Braxton", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCWNM-V1rS3vBRk4nR007E6A", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/5d5a1df4ac5078789ae2ca5603a79809/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 19, "name": "Beyoncé", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCuHzBCaKmtaLcRAOoazhCPA", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 20, "name": "Rihanna", "country": "Barbados", "ytchannel": "https://www.youtube.com/channel/UCcgqSM4YEo5vVQpqwN-MaNw", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/3461977558f68c352862c00bee35603b/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 21, "name": "Gwen Stefani", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCX6mObpqyrtKMdxvCV9YkGg", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/ade3fef9cea984f26d9c893d31f9c469/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 22, "name": "Fergie", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCDAtMQlTXquEjxFHZvJ-Mxg", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/8c7eeb690f1d616aff8a6a952260224f/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 23, "name": "T-Pain", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCwff7OoSHp3el6GqnSwcSdA", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/3ca1402cee3996233fd2ebc944407181/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 24, "name": "Carrie Underwood", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCBxZZfQ8R2xtk0YEU1d8l4Q", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/985125e5ee317cde7d65be4fece73ca1/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 25, "name": "Plain White Ts", "country": "US", "ytchannel": "https://www.youtube.com/channel/UCf7yuABFkTc4uZhjIHuuvHg", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/f4136f807163c1441f075f9f13b8eb19/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 26, "name": "Akon", "country": "US", "ytchannel": "https://www.youtube.com/channel/UC6IBMCQ6-d7p41KHxOsq4RA", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/dafed3b722037eba7b0c015d47f62e7c/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
      { "id": 27, "name": "Nelly Furtado", "country": "Canada", "ytchannel": "https://www.youtube.com/channel/UC5Y-gAeGpzgzu0ObzKnhPFA", "urlImage": "https://e-cdns-images.dzcdn.net/images/artist/737ecf18a1b488e917e4cacfa77986f4/500x500-000000-80-0-0.jpg", "createdAt": new Date(), "updatedAt": new Date() },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists', null, {});
  }
};
