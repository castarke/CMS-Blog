const { Comment } = require('../models');

const commentData = [
    {
        text: "rain rain go away",
        user_id: 1,
        post_id: 2,
        
    },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;