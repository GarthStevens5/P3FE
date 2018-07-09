import React from 'react'

class GameBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  render() {
    return (
      <div className="gameBar">
        <h2>My Games</h2>
        <ul className="cardContainer">
          {this.props.allGames.map((game) => {
            return (
              <li className="gameCard">
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