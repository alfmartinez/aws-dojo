import React, {Component} from "react";
import {Comment} from "./Comment";

export class CommentList extends Component {
    render() {
        return <div className="comment-list">
            <h1>Commentaires</h1>
            <ul>
                { this.props.comments.map(({id, message}) => <Comment key={id} message={message}/>)}
            </ul>
        </div>;
    }
}