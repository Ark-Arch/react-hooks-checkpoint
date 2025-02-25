import React from 'react'

const MovieCard = ({title, description, posterURL, rating, wiki}) => {

    return (
            <div class="card" style={{width: "18rem"}}>
                <img src={posterURL} class="card-img-top" alt="Movie Poster" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Rating:</strong> ★ {rating}</li>
                </ul>
                <div class="card-body">
                    <a href={wiki} class="card-link">More Info</a>
                </div>
            </div>

    )
}
export default MovieCard