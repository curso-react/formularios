import React from 'react';

import ImprovedCard from './improved-card';
import AddMovie from './addMovie';
import TextAreaAndSelectTag from './textAreaAndSelectTag';

export default class DynamicMoviesList extends React.Component {

  filteredMovies;

  constructor() {
    super();
    this.state = {
      movies: [
        { title: 'Jurasic Park', director: 'Steven Spielberg', hasOscar: false, imdbRate: 7 },
        { title: 'The Godfather', director: 'Francis Ford Coppola', hasOscar: true, imdbRate: 9 },
        { title: 'Pulp Fiction', director: 'Quentin Tarantino', hasOscar: true, imdbRate: 7 },
        { title: 'Star Wars', director: 'Ryan Johnson', hasOscar: false, imdbRate: 9 },
      ],
      showOscarAwarded: false
    }
  }

  toggleOscarWinner() {
    this.setState({
      ...this.state,
      showOscarAwarded: !this.state.showOscarAwarded
    })
    this.filteredMovies = this.state.showOscarAwarded ? this.state.movies : this.state.movies.filter( movie => movie.hasOscar)
  }

  deleteItemHandler = (index) => {
    const moviesCopy = [...this.state.movies];
    const match = moviesCopy.findIndex(movie => movie.title === this.filteredMovies[index].title)
    moviesCopy.splice(match, 1);
    this.setState({
      movies: moviesCopy
    });
  }

  addMovieHandler = (newMovie) => {
    let moviesCopy = this.state.movies;
    moviesCopy.push(newMovie);
    this.setState({
      movies: moviesCopy
    })
  }

  render() {
    const { showOscarAwarded } = this.state;
    this.filteredMovies = this.state.movies.filter( movie => movie.hasOscar || this.state.showOscarAwarded)
    return(
      <div>
        <AddMovie addMovie={this.addMovieHandler}></AddMovie>
        <hr/>
        {
          this.filteredMovies.map( (movie, index) => {
            return <ImprovedCard key={index} {...movie} clickToDelete={() => this.deleteItemHandler(index)}></ImprovedCard>
          })
        }
        <button onClick={() => this.toggleOscarWinner()}>
          {showOscarAwarded ? ' Hide No Oscar Winner' : ' Show No Oscar Winner'}
        </button>
        <hr/>
        <TextAreaAndSelectTag></TextAreaAndSelectTag>
      </div>
    )
  }
}