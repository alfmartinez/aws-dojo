import React, {Component} from 'react';
import './App.css';
import {CommentList} from "./components/CommentList";
import {CommentForm} from "./components/CommentForm";

class App extends Component {
  render() {
    return (
      <div className="App">
          <CommentForm/>
          <CommentList/>
      </div>
    );
  }
}

export default App;
