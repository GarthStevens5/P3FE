import React from 'react'
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class ChartPage extends React.Component {
  
  render() {
    const gameList = this.props.allGames
    const platList = this.props.allPlatforms
    var match = platList.reduce((acc, platform) => {
      const games = gameList.filter((o1) => {
          return o1.platform_id === platform.id  
      })
      // return {platform, games}
      return Object.assign(acc, {[platform.name]: games})
    }, {})
    console.log(match)
  
    return (
      <div className="chart" >
        <h2>Chart</h2>
        <PieChart data={[["PS4", 2], ["PC", 1], ["Switch", 1]]} />
      </div>
    )
  }
}

export default ChartPage