import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from './AuthorDetail';

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => {
    this.setState({currentAuthor: author});
  };

  unSelectAuthor = () => {
    this.setState({currentAuthor: null});
  };

  isAuthorSelected = () => {
    if (this.state.currentAuthor)
      return <AuthorDetail author={this.state.currentAuthor}/>;
    else
      return <AuthorsList authors={authors} func={this.selectAuthor} />;
  }

  render () {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar func={this.unSelectAuthor}/>
          </div>
          <div className="content col-10">
            {this.isAuthorSelected()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
