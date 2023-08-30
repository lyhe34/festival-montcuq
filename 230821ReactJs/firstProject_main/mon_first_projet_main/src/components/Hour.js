import React, {Component} from 'react';


export default class Hour extends Component {
    constructor(){
        super()
        this.state = {
            date : new Date()
        }
    }
    interval = setInterval (() => {
        this.setState({date: new Date ()})
    }, 1000)

    render() {
        return (
            <h2> Il est {this.state.date.toLocaleTimeString()}.</h2>
        )
    }
}