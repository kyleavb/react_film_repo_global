import React, { Component } from 'react';
import FilmRow from './FilmRow'


class FilmListing extends Component {
  constructor(props){
    super(props)
    this.state = {
      filter: "all"
    }
  }
  handleFilterClick(filter){
    this.setState({
      filter: filter
    })
  }

  render(){
    let allFilms = []
    if(this.state.filter === "all"){
      allFilms = this.props.films.map( (film, index)=> {
        return <FilmRow
        onFaveToggle={() => this.props.onFaveToggle(film)}
        film={film}
        key={film.id}
        isFave={ this.props.faves.includes(film) }
        onDetailsClick={() => this.props.onDetailsClick(film)}
        />
      })
    }else{
      allFilms = this.props.faves.map( (film, index)=> {
        return <FilmRow
        onFaveToggle={() => this.props.onFaveToggle(film)}
        film={film}
        key={film.id}
        isFave={ this.props.faves.includes(film) }
        onDetailsClick={() => this.props.onDetailsClick(film)}
        />
      })
    }

    const allFilter = this.state.filter === 'all' ? 'film-list-filter is-active' : 'film-list-filter'
    const favFilter = this.state.filter === 'faves' ? 'film-list-filter is-active' : 'film-list-filter'
    var favCount = this.props.faves.length
    return(
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div className={allFilter} onClick={() => this.handleFilterClick('all')}>
                ALL
                <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className={favFilter} onClick={() => this.handleFilterClick('faves')}>
                FAVES
                <span className="section-count">{favCount}</span>
            </div>
        </div>
        {allFilms}
      </div>
    )
  }
}

export default FilmListing;
