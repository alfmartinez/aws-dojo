import React, {Component} from "react";

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

    render() {
        return <form>
            <fieldset>
                <label>Message : </label>
                <input type="text" name="message" value={this.state.message} onChange={this.updateForm}/>
            </fieldset>
            <input type="submit" value="Envoyer"/>
        </form>;
    }
}