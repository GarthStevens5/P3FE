import React from 'react'
import GameModal from './GameModal'

class GameBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: [],
    }
  }

  deleteGame = (id) => {
    let URL = 'https://towerdb.herokuapp.com/games/delete'
    let deleteUrl = `${URL}/${id}`
    
    fetch(deleteUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
  }

  handleChange(event){
    event.preventDefault
  }

  render() {
    return (
      <div className="gameBar">
        <div className="gameBarTop">
          <h2>My Games</h2>
          <GameModal id="main" />
        </div>
        <ul onChange={this.handleChange} className="cardContainer">
          {this.props.allGames.map((game) => {
            return (
              <li key={game.id} className="gameCard">
                <button className="deleteButton" onClick={() => this.deleteGame(game.id)}>X</button>
                <h2 className="gameTitle">{game.title}</h2>
                <div className="cardDetails">
                  <h5 className="gameDev">{game.dev}</h5>
                  <small className="physOrDigi">{game.physOrDigi}</small>
                </div>
              </li>
            )
          })}
        </ul>
        
      </div>
    )
  }
}

export default GameBar