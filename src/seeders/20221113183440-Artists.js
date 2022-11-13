'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('artists', [
      { "id": 1, "name":"The Weeknd","country":"Canada","ytchannel":"https://www.youtube.com/channel/UC0WP5P-ufpRfjbNrmOWwLBQ", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 2, "name":"Chubby Checker","country":"US","ytchannel":"https://www.youtube.com/channel/UC9174PS-AngzlCbgFlv9uWQ", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 3, "name":"Santana","country":"US","ytchannel":"https://www.youtube.com/channel/UCI7pNDDat9jR8TjgF48aBDA", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 4, "name":"Bobby Darin","country":"US","ytchannel":"https://www.youtube.com/channel/UCj_otreRPRMynq2_gZj9s3w", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 5, "name":"Mark Ronson","country":"UK","ytchannel":"https://www.youtube.com/channel/UCSY5V7BJSrxNvvBF0Drslow", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 6, "name":"LeAnn Rimes","country":"US","ytchannel":"https://www.youtube.com/channel/UC59d_iEW_aUgWyKAqRnj1xg", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 7, "name":"LMFAO","country":"US","ytchannel":"https://www.youtube.com/user/LMFAOVEVO", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 8, "name":"The Black Eyed Peas","country":"US","ytchannel":"https://www.youtube.com/results?search_query=the+black+eyed+peas", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 9, "name":"Los del Río","country":"Spain","ytchannel":"https://www.youtube.com/user/LosDelRioVEVO", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 10, "name":"Ed Sheeran","country":"England","ytchannel":"https://www.youtube.com/channel/UC0C-w0YjGpqDXGB8IHb662A", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 11, "name":"Faith Hill","country":"US","ytchannel":"https://www.youtube.com/channel/UCrgWiquB-NYsL3O6D-Lm9_A", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 12, "name":"Joe","country":"US","ytchannel":"https://www.youtube.com/user/JoeVEVO", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 13, "name":"Vertical Horizon","country":"US","ytchannel":"https://www.youtube.com/channel/UCBMoHtYNfZkQ0x5nc3NNwMg", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 14, "name":"Destiny's Child","country":"US","ytchannel":"https://www.youtube.com/channel/UC2064-GFZ1y5NYZuUGX4iEA", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 15, "name":"Savage Garden","country":"Australia","ytchannel":"https://www.youtube.com/channel/UCVjBBKmklyAiWukoTU1vHRg", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 16, "name":"Lonestar","country":"US","ytchannel":"https://www.youtube.com/channel/UCOk9HVaKq7MVfTgPfsCtKRg", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 17, "name":"Matchbox Twenty","country":"US","ytchannel":"https://www.youtube.com/channel/UC3Xu7mc5Zzep3lV17hqbs5A", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 18, "name":"Toni Braxton","country":"US","ytchannel":"https://www.youtube.com/channel/UCWNM-V1rS3vBRk4nR007E6A", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 19, "name":"Beyoncé","country":"US","ytchannel":"https://www.youtube.com/channel/UCuHzBCaKmtaLcRAOoazhCPA", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 20, "name":"Rihanna","country":"Barbados","ytchannel":"https://www.youtube.com/channel/UCcgqSM4YEo5vVQpqwN-MaNw", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 21, "name":"Gwen Stefani","country":"US","ytchannel":"https://www.youtube.com/channel/UCX6mObpqyrtKMdxvCV9YkGg", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 22, "name":"Fergie","country":"US","ytchannel":"https://www.youtube.com/channel/UCDAtMQlTXquEjxFHZvJ-Mxg", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 23, "name":"T-Pain","country":"US","ytchannel":"https://www.youtube.com/channel/UCwff7OoSHp3el6GqnSwcSdA", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 24, "name":"Carrie Underwood","country":"US","ytchannel":"https://www.youtube.com/channel/UCBxZZfQ8R2xtk0YEU1d8l4Q", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 25, "name":"Plain White Ts","country":"US","ytchannel":"https://www.youtube.com/channel/UCf7yuABFkTc4uZhjIHuuvHg", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 26, "name":"Akon","country":"US","ytchannel":"https://www.youtube.com/channel/UC6IBMCQ6-d7p41KHxOsq4RA", "createdAt":new Date(), "updatedAt":new Date()},
      { "id": 27, "name":"Nelly Furtado","country":"Canada","ytchannel":"https://www.youtube.com/channel/UC5Y-gAeGpzgzu0ObzKnhPFA", "createdAt":new Date(), "updatedAt":new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists', null, {});
  }
};
