import React, { Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API"

class Search extends Component {
    state = {
        books: [],
        title: ""
    };

    handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchBooks(this.state.title)
        .then(res => {
            this.setState({
                books: res.data.items,
                title: ""
            });
            console.log(this.state.books)
        })
        .catch(err => console.log(err));
    }
    
    handleSave = bookData => {
        API.saveBook(bookData)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }
    render() {
        return (
            
        );
    }

}
export default Search;