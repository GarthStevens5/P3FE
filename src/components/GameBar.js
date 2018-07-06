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
        <ul>
          {this.props.allGames.map((game) => {
            return (
              <li>
                <h4>{game.title}</h4>
                <h4>{game.dev}</h4>
                <h4>{game.physOrDigi}</h4>
                <h4>{game.platform_id}</h4>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default GameBar