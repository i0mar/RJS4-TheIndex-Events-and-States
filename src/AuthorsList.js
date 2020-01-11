import React, { Component } from "react";
import SearchBar from "./SearchBar";

// Components
import AuthorCard from "./AuthorCard";

class AuthorsList extends Component {
  state = {
    authorsToList: this.props.authors
  };

  authorCards = this.state.authorsToList.map(author => (
    <AuthorCard key={author.first_name + author.last_name} author={author} func={this.props.func}/>
  ));

  filterAuthors = query => {
    let temp = this.props.authors.filter(author => (author.first_name + ' ' + author.last_name).toUpperCase().includes(query.toUpperCase()));
    this.setState({authorsToList: temp});

    this.authorCards = this.state.authorsToList.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} func={this.props.func}/>
    ));  
  };
z
  render() {
    return (
      <div className="authors">
        <SearchBar func={this.filterAuthors}/>
        <h3>Authors</h3>
        <div className="row">{this.authorCards}</div>
      </div>
    );
  };  
}

export default AuthorsList;
