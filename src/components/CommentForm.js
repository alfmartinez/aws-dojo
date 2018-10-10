import React, {Component} from "react";

export class CommentForm extends Component {
    render() {
        return <form>
            <fieldset>
                <field>
                    <label>Message : </label>
                    <input type="text" name="message"/>
                </field>
                <input type="submit" value="Envoyer"/>
            </fieldset>
        </form>;
    }
}