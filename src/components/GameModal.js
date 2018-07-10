import React from 'react'
import ReactModal from 'react-modal'
import ReactDOM from 'react-dom'
ReactModal.setAppElement('#root')

class GameModal extends React.Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      title: '',
      dev: '',
      physOrDigi: '',
      platform_id: ''
    }
    
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleOpenModal () {
    this.setState({ showModal: true })
  }
  
  handleCloseModal () {
    this.setState({ showModal: false })
  }
  

  
  handleErrors(response) {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response
  }

  postGame = (event) => {
    event.preventDefault()
    let URL = 'https://towerdb.herokuapp.com/newgame'
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        "title": this.state.title,
        "dev": this.state.dev,
        "physOrDigi": this.state.physOrDigi,
        "platform_id": this.state.platform_id
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  }

  handleChange(event){
    const key = event.target.name
    const value = event.target.value
    this.setState({
      [key]: value
    })
    console.log(this.state)
    
  }

  deleteGame = (id) => {
    let URL = 'https://towerdb.herokuapp.com/games/delete'
    let deleteUrl = `${URL}/${id}`
    fetch(deleteUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
    .then(this.handleErrors)
    .then(res => res.json())
  }

  render () {
    
    return (
      <div id='main'>
        <button onClick={this.handleOpenModal}>Add a Game</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <h1>Add Your Game</h1>
          <div>
            <form className='form'>
              <select onChange={this.handleChange} value={this.state.platform_id} name="platform_id" id="platform">
                <option value="1">NES</option>
                <option value="2">SNES</option>
                <option value="3">N64</option>
                <option value="4">GameCube</option>
                <option value="5">Wii</option>
                <option value="6">Wii U</option>
                <option value="7">Switch</option>
                <option value="8">Game Boy</option>
                <option value="9">Game Boy Color</option>
                <option value="10">Game Boy Advance</option>
                <option value="11">NDS</option>
                <option value="12">3DS</option>
                <option value="13">Virtual Boy</option>
                <option value="14">Genesis</option>
                <option value="15">Sega CD</option>
                <option value="16">Sega 32X</option>
                <option value="17">Saturn</option>
                <option value="18">Dreamcast</option>
                <option value="19">Game Gear</option>
                <option value="20">PlayStation</option>
                <option value="21">PlayStation 2</option>
                <option value="22">PlayStation 3</option>
                <option value="23">PlayStation 4</option>
                <option value="24">PlayStation Portable</option>
                <option value="25">PlayStation Vita</option>
                <option value="26">Xbox</option>
                <option value="27">Xbox 360</option>
                <option value="28">Xbox One</option>
                <option value="29">PC</option>
                <option value="30">Atari 2600</option>
                <option value="31">Atari 5200</option>
                <option value="32">Atari 7800</option>
                <option value="33">Atari Jaguar</option>
                <option value="34">Atari Lynx</option>
                <option value="35">Atari VCS</option>
              </select>
              <textarea onChange={this.handleChange} name="title" id="title" cols="20" rows="1" value={this.state.title} >Game Title</textarea> 
              <textarea onChange={this.handleChange} name="dev" id="developer" cols="20" rows="1" value={this.state.dev}>Developer</textarea> 
              <select value={this.state.physOrDigi} onChange={this.handleChange} name="physOrDigi" id="Physical or Digital">
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
              </select>
              <button onClick={this.postGame} type="submit">Add it!</button>
            </form>
          </div>
          <button className="exitButton" onClick={this.handleCloseModal}>Exit without adding</button>
        </ReactModal>
      </div>
    )
  }
}

const props = {}

ReactDOM.render(<GameModal {...props} />, document.getElementById('root'))

export default GameModal