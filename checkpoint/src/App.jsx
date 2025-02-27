// library imports
import React, {useState} from 'react'

//assets
import movieList from './assets/movieList.js'

// components
import MovieList from './components/MovieList'
import Filter from './components/Filter'

function App() {
  const [movies, setMovies] = useState(movieList)

  const handleMovieTitleFilter = (title) => {
    let films = movieList.filter((movie) => movie.title.toLowerCase().startsWith(title))
    setMovies(films)
  }
  
  const handleMovieRatingFilter = (rating) => {
    let films = movieList.filter((movie) => movie.rating >= rating)
    setMovies(films)
  }

  return (
    <>
      <Filter handleMovieTitleFilter={handleMovieTitleFilter} handleMovieRatingFilter={handleMovieRatingFilter}/>
      <MovieList movies={movies} />
    </>
  )
}

export default App