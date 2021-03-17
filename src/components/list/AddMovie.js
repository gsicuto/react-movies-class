import React, { Component } from 'react'

class AddMovie extends Component {
  state = {
    title:'',
    director:'',
    hasOscars: false,
    IMDbRating: ''
  }

  handleFormSubmit = (event) => {

    event.preventDefault();
    this.props.addMovie(this.state)

    this.setState({
      title:'',
      director:'',
      hasOscars: false,
      IMDbRating: ''
    })
  }


  handleInput = (event) => {
    let {name, value, type} = event.target

     if (type === 'checkbox'){
       value = event.target.checked;
      }

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>

          <label>Nome</label>
          <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleInput(e)}/>

          <label>Diretor</label>
          <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleInput(e)}/>

          <label>Tem Oscar?</label>
          <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleInput(e)}/>

          <label>IMDbRating</label>
          <input type="number" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleInput(e)}/>

          <button>Enviar</button>
        </form>
      </div>
    )
  }
  
}

export default AddMovie