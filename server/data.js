const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

module.exports = {
  "users": [
    {
      "_id": user1Id,
      "email": "theo@gmail.com",
      "firstname": "Theo",
      "surname": "Geiller",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "password": "testtest",
    },
    {
      "_id": user2Id,
      "email": "peter@gmail.com",
      "firstname": "Peter",
      "surname": "Green",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "password": "testtest1",
    },
    {
      "_id": user3Id,
      "email": "kevin@gmail.com",
      "firstname": "Kevin",
      "surname": "Rock",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "password": "testtest2",
    }
  ]
};
