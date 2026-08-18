const postModel = require("../models/post.model");

//TO  GET POST
const allPosts = async(req, res) =>{
    try{
        const Posts = await postModel.find();
        if(Posts.length === 0){
            return res.status(404).json({message: "post Collections Empty"});
        }
      res.status(200).json({success:true, Posts});
    }
    catch(err){
     res.status(500).json({message: "Finding Posts is Failed"});
    }
}


// TO ADD NEW POST METHOD:POST
const addPost = async(req,res) => {
    try{
        const{title,content}=req.body;
        if(!title || !content){
            return res.status(400).json({message: "All Fields Are Mandatory"});
        }
        const Post = await postModel.create({title,content});
        res.status(201).json({success:true, Post});
    }
    catch(err){
        res.status(500).json({message: "Adding Post Failed"});
    }
}


// TO UPDATE POST
const updatePost = async(req,res) => {
    try{
        const updatedPost = await postModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json({success:true, updatePost});
    }
    catch(err){
        res.status(500).json({message: "Post Update Failed"});
    }
}


// TO DELETE POST

const deletePost = async(req,res) => {
    try{
        await postModel.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true, message: "Post Deleted Successfully"});
    }
    catch(err){
        res.status(500).json({message: "Post Deletion Failed"});
    }
}


module.exports = {allPosts, addPost, updatePost, deletePost};