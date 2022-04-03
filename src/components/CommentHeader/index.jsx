import React, { Component } from 'react'
import './index.css'
export default class CommentHeader extends Component {
    render() {
        return (
            <div className="comment-header">
                <span className="comment_name">username here: </span> <br />
                <textarea cols={"60"} rows = "10" className="textBar" type = "text" id = "commentText" placeholder = "input your comment"/> &nbsp;
                <button className = "button" id = "commentButton" >submit</button>
                <br /><br /><br /><br />

            </div>




        )
    }
}