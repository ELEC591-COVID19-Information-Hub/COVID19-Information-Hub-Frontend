import React, { Component } from 'react'
import NewsText from '../NewsText'
import CommentPage from '../CommentPage'
import './index.css'
export default class newsTopic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            display: 'none'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            display: prevState.isToggleOn ? 'block':'none'
        }));
    }
    render() {
        return (
            <li className="newsTopic">
                <label>
                    <div>
                    <span onClick={this.handleClick} className="comment_name">news topic here(click me) </span><br />
                    <div style={{display: this.state.display}}>
                        <NewsText/>
                        <CommentPage/>
                    </div>
                    </div>
                </label>
            </li>
        )
    }
}