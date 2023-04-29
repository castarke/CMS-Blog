const router = require('express').Router();
const { Post, User } = require('../models');
 
router.get('/', async (req, res) => {
    try{ 
        const postData = await Post.findAll({
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
        const posts = postData.map((singlePost) =>
        singlePost.get({plain: true}));
        res.render('homepage',{
            posts, 
            logged_in: req.session.logged_in
        })
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/post/:id', async (req,res)=>{
    try{
        const postData = await Post.findByPk(req.params.id, {
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
        const post = postData.get({plain:true});

        res.render('signlepost', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  router.get('/signup', (req,res)=>{
    res.render('login');
  });

  module.exports = router;