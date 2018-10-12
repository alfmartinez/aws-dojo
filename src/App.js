import React, {Component} from 'react';
import './App.css';
import {CommentList} from "./components/CommentList";
import {CommentForm} from "./components/CommentForm";
import commentRepository from "./infrastructure/CommentRepository";

class App extends Component {

  constructor() {
    super();
    const comments = commentRepository.getAll();
    this.state = { comments };

  }

  onSaveComment = (comment) => {
      commentRepository.save(comment);
      const comments = commentRepository.getAll();
      this.setState({ comments });
  }

  render() {
    return (
      <div className="App">
          <CommentForm onSave={this.onSaveComment}/>
          <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
