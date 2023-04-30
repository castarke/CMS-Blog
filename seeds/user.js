const { User } = require('../models');

const userData =
[
  {
    "name": "larry",
    "email": "larrry32@gmail.com",
    "password": "admin3333"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;