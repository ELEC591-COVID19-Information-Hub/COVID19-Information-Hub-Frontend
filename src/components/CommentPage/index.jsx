import React, { Component } from 'react'
import CommentHeader from '../CommentHeader'
import CommentList from '../CommentList'

export default class CommentPage extends Component {
    render() {
        return (
            <ul className="comment-list">
                <CommentHeader/>
                <CommentList/>
            </ul>

        )
    }
}