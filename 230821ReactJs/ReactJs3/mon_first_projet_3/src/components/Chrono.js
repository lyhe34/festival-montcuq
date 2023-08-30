import React, { Component } from 'react';


class Chrono extends Component {
    constructor() {
        super();
        this.state = {

            time: new Date()

        }
    }

    // this.interval = setInterval(() => {

    // }, 1000); 


    interval = setInterval(() => {
        this.setState({ time: new Date() })
    }, 1000)

    // Bouton démarrer, pause et reset

    render() {
        return (
            <>
                <div> {this.interval.seconds} </div>
                <button onclick={this.increment} >Start</button>
            </>
        )
    }
}



export default Chrono;