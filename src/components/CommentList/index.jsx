import React, { Component } from 'react'
import Comment from '../Comment'
export default class CommentList extends Component {
    render() {
        return (
            <ul className="comment-list">
                <Comment/>
                <Comment/>
                <Comment/>
            </ul>

        )
    }
}