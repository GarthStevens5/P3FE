import React, { Component } from 'react'
import Header from './components/Header.js'
import GameBar from './components/GameBar.js'
import ChartPage from './components/ChartPage.js'
import PlatformBar from './components/PlatformBar.js'
import Footer from './components/Footer.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
      platforms: []
    }
  }
  allGames = () =>{
    fetch('https://towerdb.herokuapp.com/games')
      .then(response => response.json())
      .then(data => {
        this.setState({
          games: data.items 
        })
      })
  }
  allPlatforms = () => {
    fetch('https://towerdb.herokuapp.com/platforms')
      .then(response => response.json())
      .then(data => {
        this.setState({
          platforms: data.platforms 
        })
      })
  }
  componentDidMount(){
    this.allGames()
    this.allPlatforms()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <GameBar allGames={this.state.games}/>
          <ChartPage />
          <PlatformBar allPlatforms={this.state.platforms}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App