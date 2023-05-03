const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try{  
        // console.log('homepage route reached')
        // const response = await
        // fetch('http://localhost:3001/api/post')
        // const postData = await response.json()
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
        const post = postData.map( singlePost => singlePost.get({plain: true}))
        // console.log(post)
        // res.status(200).json(post)
        // console.log('post: ', post)
        // res.status(200).json(postData)
        res.render('homepage',{
            post, 
            login: req.session.login
        })
    } catch(err){
        console.log('There was an Error')
        console.log(err)
        res.status(500).json(err)
    }
});

router.get('/post/:id', async (req,res)=>{

    console.log(req.params.id)
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
        console.log(postData)
        const post = postData.get({plain:true});
        console.log(post)
        res.render('singlepost', {
            ...post,
            login: req.session.login
        });
    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.login) {
      res.redirect('/');
      return;
    }
    const login = req.session.login
    res.render('login', login);
  });

  router.get('/signup', (req,res)=>{
    res.render('login');
  });

  module.exports = router;