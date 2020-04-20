const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


/// GETTING ALL THE DATA FROM DATABASE
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){message:err}
});


// CREATING DATA
router.post('/',async (req,res) => {
        const post = new Post({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
            email: req.body.email,
            diet: req.body.diet,
            isconfirmed: req.body.isconfirmed,
            city: req.body.city,
            aadhar: req.body.aadhar,
            address: req.body.address,
            
        })
        try{
        const savedPost = await post.save()
         res.json(savedPost);
        }catch(err){
            res.json({message: err})
        }
         });

         
// GETTING SINGLE USER DATA
router.get('/:postId', async(req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){message:err}
});


//DELETING DATA OF A USER
router.delete('/:postId', async(req, res) => {
    try{
        const removedPost = await Post.remove({ _id: req.params.postId});
        res.json(removedPost);
    }catch(err){message:err}
});


//UPDATING DATA OF A USER
router.patch('/:postId', async(req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId},
            { $set: {first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone, 
                email: req.body.email,
                diet: req.body.diet,
                isconfirmed: req.body.isconfirmed,
                city: req.body.city,
                aadhar: req.body.aadhar,  
                address: req.body.address}}
           
          );
     res.json(updatedPost);
    }catch(err){message:err}
});




module.exports = router;