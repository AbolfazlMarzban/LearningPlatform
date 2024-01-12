const { Schema, model, models } = require("mongoose");

const AboutSchema = new Schema({
    text:  {type: String, required: true }
})

export const About = models.About || model('About', AboutSchema)
