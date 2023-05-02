const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log('post get route reached')
    try{ 
        const postData = await Post.findAll({
            include: 
            [  
                {
                model: Comment,
                attributes: ['id', 'text', 'user_id', 'post_id'],
                include: {
                    model: User,
                    attributes: ['name']
                }
            },
                {
                    model:User,
                    attributes: ['name'],
                }
            ]
        },
        )
        // console.log('postdata: ', postData)
        const post = postData.map(singlePost => singlePost.get({plain: true}))
        console.log('post: ', post)
        res.status(200).json(postData)
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/:id', withAuth, async (req, res)=> {
    try{
         const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: Comment
            }],
         })
         res.status(200).json(postData)
    }
    catch (err){
        console.log(err)
        res.status(500).json('error in getting the post')
    }
});

router.post('/', withAuth, async (req, res) => {
    try{
        const postData = await Post.create({
            title:req.body.title,
            content:req.body.content,
            user_id: req.body.user_id
        })
        res.status(200).json(postData);
    }catch(err){
        console.log(err)
        res.status(500).json('error in creating the post')
    }
})

router.put('/:id', withAuth, async (req,res) => {
    try {
        const postData = await Post.update({
            title:req.body.title,
            content:req.body.content,
            user_id: req.body.user_id
        },{
            where: {
                id:req.params.id
            }
        });
        res.status(200).json(postData);
    }
    catch(err){
        console.log(err)
        res.status(500).json('error in updating the post')
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(postData)
    } catch(err){
        console.log(err)
        res.status(500).json('error in deleting the post')
    }
})

module.exports = router;