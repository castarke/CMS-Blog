const { User } = require('../models');

const userData =
[
  {
    "name": "Larry",
    "email": "larry32@gmail.com",
    "password": "admin3333"
  },
  {
    "name": "Emily",
    "email": "emily90@gmail.com",
    "password": "12345678"
  },
  {
    "name": "Max",
    "email": "max.power@gmail.com",
    "password": "strongpassword123"
  },
  {
    "name": "Jasmine",
    "email": "jasmine23@gmail.com",
    "password": "ilovecoding"
  },
  {
    "name": "Daniel",
    "email": "daniel789@gmail.com",
    "password": "danielpass"
  },
  {
    "name": "Amanda",
    "email": "amanda44@gmail.com",
    "password": "password1234"
  }  
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;