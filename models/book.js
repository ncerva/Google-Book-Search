//title authors description image link
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookschema = new Schema ({
    title: {
        type: String,
        require: true
    },
    authors: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        unique: true,
        require: true
    },
    link:{
        type: String,
        require: true
    },
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;