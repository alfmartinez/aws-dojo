import React, {Component} from "react";
import {v4 as uuid} from "uuid";

export class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };
    }

    updateForm = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    submit = (e) => {
        e.preventDefault();
        let id = uuid();
        const comment = this.state;
        this.props.onSave({
            ...comment,
            id
        })
    }

    render() {
        return <form onSubmit={this.submit}>
            <fieldset>
                <label>Message : </label>
                <input type="text" name="message" value={this.state.message} onChange={this.updateForm}/>
            </fieldset>
            <input type="submit" value="Envoyer"/>
        </form>;
    }
}