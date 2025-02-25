// library imports
import React, {useState} from 'react'

//assets
import movieList from './assets/movieList.js'

// components
import MovieList from './components/MovieList'
import Filter from './components/Filter'

function App() {
  const [movies, setFilter] = useState(movieList)


  return (
    <>
      <Filter />
      <MovieList movies={movies} />
    </>
  )
}

export default App