import React from 'react'
import movieList from '../assets/movieList'

const MovieCard = () => {

    return (
            <div class="card" style={{width: "18rem"}}>
                <img src={movieList[0]['posterURL']} class="card-img-top" alt="Movie Poster" />
                <div class="card-body">
                    <h5 class="card-title">Movie Title</h5>
                    <p class="card-text">Short description of the movie goes here.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Rating:</strong> ★ 8.5</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">More Info</a>
                </div>
            </div>

    )
}
export default MovieCard