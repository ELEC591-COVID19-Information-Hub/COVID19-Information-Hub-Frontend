import React, { Component } from 'react'
import './index.css'

export default class Comment extends Component {
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
                    <button className="button" id = "commentButton" >response</button>
                </label>

            </li>
        )
    }
}