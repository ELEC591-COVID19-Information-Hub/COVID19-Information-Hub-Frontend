import React, {Component} from 'react'
import NewsTopic from './components/NewsTopic'
import './App.css';
import USAMap from "react-usa-map";

function App() {
    const mapHandler = (event) => {
        alert(event.target.dataset.name);
    }
    let statesCustomConfig = () => {
        return {
            "NJ": {
                fill: "navy",
                clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
            },
            "NY": {
                fill: "#CC0000"
            }
        };
    };

    return (
        <div>
            <NewsTopic/>
            <NewsTopic/>
            <NewsTopic/>
            <div className="App">
                <USAMap customize={statesCustomConfig()} onClick={mapHandler}/>
            </div>
        </div>
    )
}

export default App;
