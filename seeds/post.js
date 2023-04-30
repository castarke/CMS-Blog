const { Post } = require('../models');

const postData = [
    {
        title: "Why rain is so good",
        content: "rain is relaxing and can take all your stress away",
        user_id: 1
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;