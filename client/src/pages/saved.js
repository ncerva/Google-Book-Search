import React, { Component} from "react";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount = () => {
        this.loadBooks();
    }

    handleDelete = (id) => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    loadBooks = () => {
        API.findBook()
        .then(res => {
            this.setState({
                books: res.data
            })
        })
        .catch(err => console.log(err));
    }

}

export default Saved;