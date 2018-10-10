import React, {Component} from "react";

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
                { comments.map(({id, message}) => <li key={id}>{message}</li>)}
            </ul>
        </div>;
    }
}