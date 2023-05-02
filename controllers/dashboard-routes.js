const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
 
router.get('/',  withAuth, async (req, res) => {
    try{ 
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes:[
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [
                {
                    model: User,
                    attributes:['name']
                }
                ]
            
        });
        const post = postData.map((singlePost) =>
        singlePost.get({plain: true}));
        res.render('dashboard',{
            post, 
            login: req.session.login
        })
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/edit/:id', withAuth, async (req,res)=>{
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model:User,
                    attributes: ['name'],
                }
            ]
        }
        )
        const post = postData.get({plain:true});

        res.render('edit-post', {
            ...post,
            login: req.session.login
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, (req, res) => {
res.render('new-post');
}
)

module.exports = router;