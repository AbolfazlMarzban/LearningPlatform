const { Schema, model, models } = require("mongoose");

const PostSchema = new Schema({
    postPic:  {type: String, required: true },
    title: {type: String, required: true },
    description: { type: String, required: true }, 
    text: { type: String, required: true }
})

export const Post = models.Post || model('Post', PostSchema)
