import React from 'react'
import ReactChartkick, { PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

class ChartPage extends React.Component {
  render() {
    return (
      <div className="chart" >
        <h2>Chart</h2>
        <PieChart data={[["PS4", 33], ["PC", 33], ["Switch", 33]]} />
      </div>
    )
  }
}

export default ChartPage