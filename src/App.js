import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'
import Dotenv from 'dotenv';

Dotenv.config()
const films = TMDB.films

class App extends Component {
  constructor(props){
    super()

    this.state ={
      films,
      faves:[],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleFaveToggle(film){
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex !== -1){
      //film is faved
      faves.splice(filmIndex, 1)
    }else{
      //film needs to be favorited
      faves.push(film)
    }
    this.setState({faves})
}

handleDetailsClick(film){
  console.log(film)
  const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos,images&language=en`
  fetch(url).then(response => {
  response.json().then(data => {
      //console.log(data) // take a look at what you get back!
    })
  })
  this.setState({
    current: film
  })
}

  render() {
    return (
      <div className="film-library">
        <FilmListing faves={this.state.faves} onFaveToggle={this.handleFaveToggle} onDetailsClick={this.handleDetailsClick} films={this.state.films}/>
        <FilmDetails film={this.state.current}/>
      </div>
    );
  }
}

export default App;
