import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// mongoose.model(collectionname in singular word, schema);
const PostMessage = mongoose.model('Postmessage', postSchema);

export default PostMessage;