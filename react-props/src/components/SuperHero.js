import React, { Component } from "react";

class SuperHero extends Component {
    render() {
        console.log(this.props)
        return (
            <>
            <button onClick={this.props.clickMethod}>click me!</button>
            
            <h2> {this.props.name[this.props.number]}</h2>
            </>
        )
    }

}

export default SuperHero