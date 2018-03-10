import React, { Component } from 'react';

class FilmPoster extends Component{
  render(){
    var posterUrl = "https://image.tmdb.org/t/p/w780/" + this.props.film.poster_path
    return(
      <img src={posterUrl} alt=""></img>
    )
  }
}

export default FilmPoster
