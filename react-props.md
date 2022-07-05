



 state in react is a object


 pass information from the state object to another object- 

 from parent state to child component

parent     child  
        -> Footer
 App ->
        -> Body


PASSING VARIABLE FROM MAIN APP.JS to CHILD COMPONENT.JS WITH PROPS: line 27 & 41

PARENT

render() {
    return (
      <>
      <h1> {this.state.heroArray[this.state.randomHero]}</h1>
      <button onClick={this.handleClick}>click me!</button>
      <SuperHero name="Black Widow" ></SuperHero>
      </>

    )
  }
}

CHILD

class SuperHero extends Component {
    render() {
        return (
            <>
            <p> SuperHero</p>
            <h2> {this.props.name}</h2>
            </>
        )
    }

}



---- DYNAMIC VERSION- PARENT - CHANGE PARENT TO PASS A VARIABLE INTO THE COMPONENT LIKE A FUNCTION



  render() {
    return (
      <>
      
      <button onClick={this.handleClick}>click me!</button>
      <SuperHero name={this.state.heroArray[this.state.randomHero]} ></SuperHero>
      </>

    )
  }
}


--- PASSING MULTIPLE VALUES AND METHODS

PARENT

    <>
      <SuperHero 
                name={this.state.heroArray}
                number ={this.state.randomHero}
                clickMethod={this.handleClick}
      ></SuperHero>
    </>

CHILD

    <>
        <button onClick={this.props.clickMethod}>click me!</button>
            
        <h2> {this.props.name[this.props.number]}</h2>
     </>