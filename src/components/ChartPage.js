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
        <PieChart className="theActualChart" data={[
          ["Atari 2600", match['Atari 2600']&& match['Atari 2600'].length],
          ["Atari 5200", match['Atari 5200']&& match['Atari 5200'].length],
          ["Atari 7800", match['Atari 7800']&& match['Atari 7800'].length],
          ["Atari Jaguar", match['Atari Jaguar']&& match['Atari Jaguar'].length],
          ["Atari Lynx", match['Atari Lynx']&& match['Atari Lynx'].length],
          ["Atari VCS", match['Atari VCS']&& match['Atari VCS'].length], 
          ["NES", match['NES']&& match['NES'].length],
          ["SNES", match['SNES']&& match['SNES'].length],
          ["N64", match['N64']&& match['N64'].length],
          ["GameCube", match['GameCube']&& match['GameCube'].length],
          ["Wii", match['Wii']&& match['Wii'].length],
          ["Wii U", match['Wii U']&& match['Wii U'].length],
          ["Switch", match['Switch']&& match['Switch'].length],
          ["Game Boy", match['Game Boy']&& match['Game Boy'].length],
          ["Game Boy Color", match['Game Boy Color']&& match['Game Boy Color'].length],
          ["Game Boy Advance", match['Game Boy Advance']&& match['Game Boy Advance'].length],
          ["NDS", match['NDS']&& match['NDS'].length],
          ["3DS", match['3DS']&& match['3DS'].length],
          ["Virtual Boy", match['Virtual Boy']&& match['Virtual Boy'].length],
          ["Genesis", match['Genesis']&& match['Genesis'].length],
          ["Sega CD", match['Sega CD']&& match['Sega CD'].length],
          ["Sega 32X", match['Sega 32X']&& match['Sega 32X'].length],
          ["Saturn", match['Saturn']&& match['Saturn'].length],
          ["Dreamcast", match['Dreamcast']&& match['Dreamcast'].length],
          ["Game Gear", match['Game Gear']&& match['Game Gear'].length],
          ["PlayStation", match['PlayStation']&& match['PlayStation'].length],
          ["PlayStation 2", match['PlayStation 2']&& match['PlayStation 2'].length],
          ["PlayStation 3", match['PlayStation 3']&& match['PlayStation 3'].length],
          ['PlayStation 4', match['PlayStation 4']&& match['PlayStation 4'].length],
          ["PlayStation Portable", match['PlayStation Portable']&& match['PlayStation Portable'].length],
          ["PlayStation Vita", match['PlayStation Vita']&& match['PlayStation Vita'].length],
          ["Xbox", match['Xbox']&& match['Xbox'].length],
          ["Xbox 360", match['Xbox 360']&& match['Xbox 360'].length],
          ["Xbox One", match['Xbox One']&& match['Xbox One'].length],
          ["PC", match['PC']&& match['PC'].length]
        ]} colors={[
            "saddlebrown",
            "darkslategray",
            "darkgray",
            "firebrick",
            "darkorange",
            "dodgerblue",
            "lightgrey",
            "darkslateblue",
            "dimgrey",
            "slateblue",
            "whitesmoke",
            "darkturquoise",
            "red",
            "silver",
            "chartreuse",
            "mediumpurple",
            "royalblue",
            "lightseagreen",
            "indianred",
            "teal",
            "deepskyblue",
            "gold",
            "steelblue",
            "lightslategrey",
            "darkcyan",
            "#a7a0a0",
            "cornflowerblue",
            "darkred",
            "midnightblue",
            "goldenrod",
            "cornflowerblue",
            "limegreen",
            "#0dbf4a",
            "green",
            "grey"]}/>
      </div>
    )
  }
}

export default ChartPage