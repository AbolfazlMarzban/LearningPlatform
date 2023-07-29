const { Schema, model, models } = require("mongoose");

const CourseSchema = new Schema({
    name:  {type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    link: {type: String, required: true},
    price: { type: Number, required: true}
})

export const Course = models.Course || model('Course', CourseSchema)
