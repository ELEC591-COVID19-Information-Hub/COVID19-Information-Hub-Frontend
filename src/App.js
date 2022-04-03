import React, { Component } from 'react'
import CommentPage from './components/CommentPage'
import NewTopicListPage from './components/NewsTopicListPage'
import './App.css';
// import "div1"

// const Div1 = () => {
//     return (
//         <div>
//             This is a div
//         </div>
//     )
// }

function App() {
    return (
        <div>
            {/*<Div1/>*/}
            {/*<Div1/>*/}
            <NewTopicListPage/>
            <CommentPage/>
        </div>
    );
}

export default App;
