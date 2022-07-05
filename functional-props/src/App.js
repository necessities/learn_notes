import React, { Component } from "react";
import Menu from "./components/Menu";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      adultMenu: ["Corn on the Cob", "Hot Dogs", "Wine", "Carne Asada"],
      kidsMenu: ["Chicken Nuggets", "Mac N Cheese", "Juice Box", "Fruit Salad"],
      plate: []
    }
  }


  plateOrder = (item) => {
    console.log(item)
    // spread operator ... ; take whats in the in the array and addon selected item 
    this.setState({ plate: [...this.state.plate, item]})
    // console.log(this.state.plate) shows each item being added 

  }



  render() {
    return (
      <>
      <h2> Adult Menu </h2>
      // create common variable to pass variable into 
        <Menu menuItems={this.state.adultMenu} plateOrder={this.plateOrder} />
      <h2>
        Kids Menu
      </h2>
      <Menu menuItems={this.state.kidsMenu} plateOrder={this.plateOrder} />

      <h2> Your Plate: </h2>
      <ul>
        {this.state.plate.map(item => {
          return <li>{item}</li>
        })}
      </ul>
        








{/*      OLD SINLGE USE REACT LINE 
      <h1> Dirty Delta Dawgs BBQ</h1>
      <h2> Adult Menu</h2>
      <ul>{this.state.adultMenu.map(item => {
        return <li>{item}</li>
      })}</ul>

      <h2> Kids Menu</h2>
      <ul>
        {this.state.kidsMenu.map(item => {
          return <li>{item}</li>
        })}
      </ul> */}

     
      
      </>
    )
  }
}

export default App