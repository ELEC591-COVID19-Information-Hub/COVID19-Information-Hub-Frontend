import React, { Component } from 'react'
import NewsTopic from './components/NewsTopic'
// import CommentPage from './components/CommentPage'
// import NewsPage from './components/NewsPage'
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
            {/*<NewsPage/>*/}
            {/*<CommentPage/>*/}
            <NewsTopic/>
            <NewsTopic/>
            <NewsTopic/>
        </div>
    );
}

export default App;
