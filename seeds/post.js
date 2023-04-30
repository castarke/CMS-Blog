const { Post } = require('../models');

const postData = [
    {
        title: "Why rain is so good",
        content: "rain is relaxing and can take all your stress away",
        user_id: 1
    },{
        title:"The Benefits of Meditation",
        content:"Meditation has been shown to have numerous benefits for both the mind and body, including reducing stress and anxiety, improving sleep, and increasing feelings of well-being.",
        user_id: 2
    },{
        title:"How to Stay Productive While Working From Home",
        content:"With more people working from home than ever before, it's important to find ways to stay productive and focused. This blog post will provide tips and strategies for staying on track and avoiding distractions.",
        user_id:3
    },{
        title:"The Importance of Diversity in the Workplace",
        content:"A diverse workplace can lead to better decision-making, increased creativity, and a more inclusive company culture. In this blog post, we'll explore why diversity is so important and how companies can work to create a more inclusive environment.",
        user_id:4
    },{
        title:"The Benefits of Traveling Solo",
        content:"While traveling with friends or family can be fun, there are many benefits to traveling solo. This blog post will explore the advantages of solo travel, such as increased independence and self-discovery, as well as tips for staying safe and making the most of your trip.",
        user_id:5
    },{
        title:"The Future of Artificial Intelligence",
        content:"AI has the potential to revolutionize numerous industries, from healthcare to finance to transportation. In this blog post, we'll explore the current state of AI technology and its potential for the future, as well as some of the ethical considerations that come with this rapidly evolving field.",
        user_id:6
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;