import React, {Component} from 'react';
import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component{
//
  render(){
    var releaseDate =  new Date(this.props.film.release_date).getFullYear()
    return(
      <div className="film-row" onClick={() => this.props.onDetailsClick(this.props.film)}>
        <FilmPoster film={this.props.film} />
        <div className="film-summary">
          <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle} />
          <h1>{this.props.film.title}</h1>
          <p>{releaseDate}</p>
        </div>
      </div>
    )
  }
}
export default FilmRow
