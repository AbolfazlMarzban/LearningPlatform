const { Schema, model, models } = require("mongoose");

const ContactsSchema = new Schema({
    phonenumber:  {type: String, required: false },
    email:  {type: String, required: false },
    linkedin:  {type: String, required: false },
    github:  {type: String, required: false },
    instagram:  {type: String, required: false }
})

export const Contacts = models.Contacts || model('Contacts', ContactsSchema)
