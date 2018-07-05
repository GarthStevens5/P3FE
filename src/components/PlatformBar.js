import React from 'react'

class PlatformBar extends React.Component {
  render() {
    return (
      <div className="platformBar" >
        <h2>My Platforms</h2>
        <ul>
          {this.props.allPlatforms.map((platform) => {
            return (
              <li>
                <h4>{platform.name}</h4>
                <h4>{platform.manufacturer}</h4>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PlatformBar