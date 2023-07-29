const { Schema, model, models } = require("mongoose");

const BookSchema = new Schema({
    name:  {type: String, required: true },
    // link: {type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true}
})

export const Book = models.Book || model('Book', BookSchema)
