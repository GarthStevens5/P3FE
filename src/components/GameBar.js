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
    console.log(deleteUrl);
    
    // fetch(deleteUrl, {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" }
    // })
    // .then(res => res.json())
  }

  render() {
    return (
      <div className="gameBar">
        <h2>My Games</h2>
        <GameModal id="main" />
        <ul className="cardContainer">
          {this.props.allGames.map((game) => {
            return (
              <li key={game.id} className="gameCard">
                <button className="deleteButton" onClick={() => this.deleteGame(game.id)}>X</button>
                <h2>{game.title}</h2>
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