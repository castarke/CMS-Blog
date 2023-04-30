const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id',  withAuth, async (req, res) => {
    try{ 
        const commentData = await Comment.findAll({
            where:{
                post_id: req.body.post_id
            },
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
        }
        )
        res.status.json(commentData)
    } catch(err){
        res.status(500).json(err)
    }
});

router.post('/', withAuth, async (req, res) => {
    try{
        const commentData = await Comment.create({
            text:req.body.text,
            user_id: req.body.user_id,
             post_id:req.body.post_id,
        })
        res.status(200).json(commentData);
    }catch(err){
        console.log(err)
        res.status(500).json('error in creating the comment')
    }
})

router.put('/:id', withAuth, async (req,res) => {
    try {
        const commentData = await Comment.update({
            text:req.body.text,
            user_id: req.body.user_id,
            post_id:req.body.post_id,
        },{
            where: {
                post_id:req.params.post_id
            }
        });
        res.status(200).json(commentData);
    }
    catch(err){
        console.log(err)
        res.status(500).json('error in updating the comment')
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(commentData)
    } catch(err){
        console.log(err)
        res.status(500).json('error in deleting the comment')
    }
})

module.exports = router;