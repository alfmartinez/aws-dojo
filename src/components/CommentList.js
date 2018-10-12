import React, {Component} from "react";
import {Comment} from "./Comment";

export class CommentList extends Component {
    render() {

        const comments = [{
            id: 'ABCD',
            message: 'Comment A'
        },{
            id: '99F3',
            message:'Comment B'
        }];

        return <div className="comment-list">
            <h1>Commentaires</h1>
            <ul>
                { comments.map(({id, message}) => <Comment key={id} message={message}/>)}
            </ul>
        </div>;
    }
}