const { Schema, model, models } = require("mongoose");

const ProjectSchema = new Schema({
    name:  {type: String, required: true },
    link: {type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true }
})

export const Project = models.Project || model('Project', ProjectSchema)
