import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class Comment extends Component {
    render() {
        return <li>{this.props.message}</li>;
    }
}

Comment.propTypes = {message: PropTypes.string};