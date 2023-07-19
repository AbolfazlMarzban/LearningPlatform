const { Schema, model, models } = require("mongoose");

const ProjectSchema = new Schema({
    name:  {type: String, required: true },
    link: {type: String, required: true },
    description: { type: Number, required: true },
    address: { type: Number, required: true }
})

export const Project = models.Project || model('Project', ProjectSchema)
