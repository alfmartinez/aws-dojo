import React, {Component} from "react";
import {Comment} from "./Comment";
import {CommentRepository} from "../infrastructure/CommentRepository";

export class CommentList extends Component {
    render() {
        const comments = CommentRepository.getAll();

        return <div className="comment-list">
            <h1>Commentaires</h1>
            <ul>
                { comments.map(({id, message}) => <Comment key={id} message={message}/>)}
            </ul>
        </div>;
    }
}