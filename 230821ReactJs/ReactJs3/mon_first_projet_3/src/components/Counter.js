import React, { Component } from 'react';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

increment = () => {
    this.setState({count : this.state.count+1})
    // On utilise la méthode setState et on lui dit qu'il va prendre 
    // dans l'objet count la valeur actuelle et l'ajouter
}

decrement = () => {
    this.setState({count : this.state.count-1})
}

    render() {
        return (
            // <div> Counter </div>
            <>
            <div> {this.state.count} </div>
            <button onClick={this.increment}>Incrémenter</button>
            <button onClick={this.decrement}>Décrémenter</button>    
            {/* //→ Sur React, on ne peut pas ?  */}
            {/* // Il faut tout englober dans des balises vides parce que les balises sont au même niveau  */}
            {/* // = react fragment */}
            </>
        )
    }
}


export default Counter; 
