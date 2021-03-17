import React, {Component} from 'react'
import { Button, AppBar, Typography } from '@material-ui/core'
import MovieCard from '../MovieCard'
import AddMovie from './AddMovie'

class DynamicList extends Component {

  state = {
    movies: [
      { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
      { id: "EXN9npPlo",  title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
      { id: "lecqGHnAb",  title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
    ],
    showOscarAwarded: false
  }

  deleteMovieHandler = (id) => {
    console.log(id)
    const movieCopy = [...this.state.movies];
    const movieIndex = movieCopy.findIndex(movie => movie.id === id);
    movieCopy.splice(movieIndex, 1);
    console.log(movieCopy)
    this.setState({
      movies: movieCopy
    });
  }

  toogleMovies = () => {
    this.setState({showOscarAwarded: !this.state.showOscarAwarded })
  }

  addMovie = (newMovie) => {
    const movieCopy = [...this.state.movies];

    newMovie.id = `${Math.random()}`

    movieCopy.push(newMovie);

    this.setState({movies: movieCopy});
  }
  
  render() {
    console.log(this.state.movies)

    const { showOscarAwarded } = this.state;
    const movies = showOscarAwarded ? this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded) : [...this.state.movies]

    return(
      <div>
        <AppBar position="static" style={{marginBottom: "20px"}}>
          <Typography variant="h3" >
            Filmes
          </Typography>
        </AppBar>

        <AddMovie addMovie={(newMovie)=>{this.addMovie(newMovie)}}/>

        <div>
          <Button  variant="contained" color="primary" onClick={()=>{this.toogleMovies()}}>       
            {
              showOscarAwarded ? 'Mostrar Todos os Filmes' : 'Mostrar Somente Filmes com Oscar'
            }
          </Button>
        </div>

        {
          movies.map(movie => {
            return <MovieCard nameButton = 'Delete' click={() => { this.deleteMovieHandler(movie.id) }} key={movie.id} {...movie}/>}
          )
        }
      </div>
    )
  }

}

export default DynamicList


