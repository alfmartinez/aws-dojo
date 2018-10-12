import React, {Component} from 'react';
import './App.css';
import {CommentList} from "./components/CommentList";
import {CommentForm} from "./components/CommentForm";
import commentRepository from "./infrastructure/CommentRepository";



class App extends Component {

  constructor() {
    super();
    this.state = {comments:[]};
    this.loadComments();
  }

  loadComments() {
      commentRepository.getAll()
          .then(comments => this.setState({comments}));
  }

  onSaveComment = (comment) => {
      commentRepository.save(comment);
      this.loadComments();
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
