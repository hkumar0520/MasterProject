import PostMessage from "../models/postMessage.js";


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
    // in req.body get data from frontend, in the frontend order
    const post = req.body;

    // here the data saved in newPost in the order of schema in models
    const newPost = new PostMessage(post);
        // https://www.restapitutorial.com/httpstatuscodes.html
    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}