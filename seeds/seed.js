const seedUsers = require('./user');
const seedPost = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPost();
    await seedComments();
    process.exit(0);
};

seedAll();