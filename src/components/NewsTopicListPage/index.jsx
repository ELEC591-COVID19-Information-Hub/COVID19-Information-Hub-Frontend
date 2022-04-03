import React, { Component } from 'react'
import NewsTopic from '../NewsTopic'
import './index.css'
export default class newsTopicListPage extends Component {
    render() {
        return (
                <ul>
                    <NewsTopic />
                    <NewsTopic />
                    <NewsTopic />
                </ul>

        )
    }
}