import { Component } from "react";

class Menu extends Component {
    render() {
        return(
            <>
            <ul>{this.props.menuItems.map((item, index) => {
                // there is a anonymous function in the button to make it run only when clicked, also the index from the .map had to be put in the key value in the li tag, the value, index need to be in () when there are multiple like that not just the value 
                return <li key={index}>
                    <button onClick={() => {this.props.plateOrder(item)}}>{item}</button>{item}</li>
                })}
            </ul>
            </>
        )
    }

}

export default Menu