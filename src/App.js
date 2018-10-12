import React, {Component} from 'react';
import './App.css';
import {CommentList} from "./components/CommentList";
import {CommentForm} from "./components/CommentForm";
import commentRepository from "./infrastructure/CommentRepository";
import Analytics from '@aws-amplify/analytics';


class App extends Component {

  constructor() {
    super();
    this.state = {comments:[]};
    this.loadComments();
    Analytics.record('App loaded');
  }

  loadComments() {
      commentRepository.getAll()
          .then(comments => {
              Analytics.record('Comments loaded');
              this.setState({comments});
          });
  }

  onSaveComment = (comment) => {
      commentRepository.save(comment);
      Analytics.record('Comment saved');
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
