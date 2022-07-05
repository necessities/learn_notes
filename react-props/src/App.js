import react, {Component} from 'react'
import SuperHero from './components/SuperHero'

class App extends Component {
    // displays random superhero names on a click
  constructor(props) {
    super(props)
    this.state = {
      heroArray: ["Spiderman", "Thor", "Ironman", "Deadpool", "Batman", "Avatar", "StaticShock", "Superman", "Captain Marvel", "Wonder Woman", "Black Widow"],
      randomHero: 0
    }
  }
  
      // part 2 - create a method that will take some input (a click on screen) and return a change in our state object

      // handle is a naming convention for methods
  handleClick = () => {
      // needs to invoke a function that returns a random number between 0 and length of array

    let randomNum = Math.floor(Math.random() * this.state.heroArray.length)
    console.log(randomNum)

    this.setState({randomHero: randomNum})
  }




  render() {
    return (
      <>
      <SuperHero 
                name={this.state.heroArray}
                number ={this.state.randomHero}
                clickMethod={this.handleClick}
      ></SuperHero>
      </>

    )
  }
}

export default App