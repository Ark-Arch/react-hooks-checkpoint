// library imports
import React, {useState} from 'react'

//assets
import movieList from './assets/movieList.js'

// components
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie.jsx'

function App() {
  const [movies, setMovies] = useState(movieList)

  // callback for add movie
  const handleAddNewMovie = (newMovie) => {
    movieList.push(newMovie)
    let films = movieList
    console.log(films)
    setMovies([...films])
  }

  // callbacks for filter component
  const handleMovieTitleFilter = (title) => {
    let films = movieList.filter((movie) => movie.title.toLowerCase().startsWith(title))
    setMovies(films)
  }
  const handleMovieRatingFilter = (rating) => {
    let films = movieList.filter((movie) => movie.rating*1 >= rating)
    console.log(films)
    setMovies(films)
  }

  return (
    <>
      <AddMovie handleAddNewMovie={handleAddNewMovie}/>
      <Filter handleMovieTitleFilter={handleMovieTitleFilter} handleMovieRatingFilter={handleMovieRatingFilter}/>
      <MovieList movies={movies} />
    </>
  )
}

export default App