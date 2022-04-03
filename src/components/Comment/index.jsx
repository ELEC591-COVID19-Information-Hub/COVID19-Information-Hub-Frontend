import React, { Component } from 'react'
import './index.css'

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("test")
    }
    render() {
        return (
            <li className="comment">
                <label>
                    <span className="comment_name">comment username here </span><br />
                    <span className="comment_content">the comment text here</span>
                </label>
                <label>
                    <br />
                    <br />
                    <textarea className="reply" cols="10" rows = "2" type = "text" id = "responseText" placeholder = "input your response to the comment"/> &nbsp;
                    <button onClick={this.handleClick} className="button" id = "commentButton" >response</button>
                </label>

            </li>
        )
    }
}