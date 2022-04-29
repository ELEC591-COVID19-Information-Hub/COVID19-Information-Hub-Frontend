import USAMap from "react-usa-map";
import React from 'react';
import name2abbr from '../../data/name-abbr.json'

export const Map = (props) => {


    const mapHandler = (event) => {
        // console.log(event.target.dataset)
        props.setDetailsState(event.target.dataset.name)
        props.handleClickOpen()
    }

    const max = Math.max(...props.data.map(data => data.cases), 1000000)
    const min = Math.min(...props.data.map(data => data.cases))
    const rgb = (minimum, maximum, value) => {
        const ratio = 2 * ((value - minimum) / (maximum - minimum))

        const b = Math.floor(Math.max(0, 255 * (1 - ratio)))
        const r = 255
        const g = Math.floor(Math.max(0, 255 * (1 - ratio)))
        // console.log(r.toString(16), g.toString(16), b.toString(16))
        return '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')
        // return "#000000"
    }

    let statesCustomConfig = () => {
        let res = {}
        for (const element of props.data) {
            res[name2abbr[element.state]] = {
                fill: rgb(min, max, element.cases)
            }
        }
        return res
    };


    return (
        <div>
            <USAMap customize={statesCustomConfig()} onClick={mapHandler}/>
        </div>
    )
}