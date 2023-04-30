const { Comment } = require('../models');

const commentData = [
    {
        text: "rain rain go away",
        user_id: 1,
        post_id: 1,
        
    },{
        text:"I started meditating a few months ago and I can already feel the difference it's made in my life. Thanks for sharing these insights!",
        user_id:3,
        post_id:2,
    },{
        text:"These are great tips! I've been struggling with staying focused lately, so I'll definitely be trying some of these out.",
        user_id:5,
        post_id:3,
    },{
        text:"I couldn't agree more! As someone who's worked in a variety of industries, I've seen firsthand how a lack of diversity can stifle innovation and creativity. It's time for companies to step up and create more inclusive environments.",
        user_id:4,
        post_id:4,
    },{
        text:"I've always been nervous about traveling alone, but you make some great points about the benefits. Maybe it's time to take the plunge!" ,
        user_id:1,
        post_id:5,
    },{
        text:"This is such an exciting field! I can't wait to see what the future holds for AI and how it will shape our world.",
        user_id:2,
        post_id:6,
    },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;