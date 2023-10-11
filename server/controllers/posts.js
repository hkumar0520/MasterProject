import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';


export const getPosts = async (req,res) =>{
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages);

        res.status(200).json(postMessages);

    } catch(error) {
        res.status(404).json({ message: error.message});

    }
}

export const createPost = async (req, res) =>{
    const post = req.body;

    const newPost = new PostMessage(post);
        // https://www.restapitutorial.com/httpstatuscodes.html
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) =>{
    const { id } = req.params;
    const post = req.body;
    console.log(id);
    console.log(post);
    console.log('updatePost')

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const updatePost = await PostMessage.findByIdAndUpdate(id, post, {new: true});
    console.log(updatePost);
    console.log('updatePost node1')
    res.json(updatePost);
}

export const deletePost = async (req, res) => {

    const { id } = req.params;
    console.log(id);
    console.log('deletePost');

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully'});

}

export const likePost = async( req,res )  => {

    const { id } = req.params;
    console.log(id);
    console.log('likePost');

    if(!req.userId) return res.json({ message: 'Unauthenticated' });

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);

    const index = await post.likes.findIndex((id) => id === String(req.userId));

    if(index == -1){
        // like the post
        post.likes.push(req.userId);
    }
    else{
        // dislike the post
        post.likes = post.likes.filter((id) => id !== req.userId);
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

    res.json(updatedPost);

}










