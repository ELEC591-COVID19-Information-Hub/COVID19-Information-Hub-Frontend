// import "div1"
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
        <div className="App">
            <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
        </div>
    );
}

export default App;
