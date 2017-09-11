import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions/index";


class CommentBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            comment: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.comment){
            this.props.saveComment(this.state.comment);
            this.setState({
                comment: ''
            })
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="comment-box">
                <textarea
                    onChange={this.handleChange}
                    value={this.state.comment} />
                <div>
                <button action="submit">Save</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox)
