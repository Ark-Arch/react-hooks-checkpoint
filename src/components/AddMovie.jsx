import React from 'react'
import {useRef} from 'react'

const AddMovie = ({handleAddNewMovie}) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const posterRef = useRef()
    const ratingRef = useRef()
    const wikiRef = useRef()

    const handleAddingNew = () => {
        let title = titleRef.current.value
        let description = descriptionRef.current.value
        let posterURL = posterRef.current.value
        let rating = ratingRef.current.value
        let wiki = wikiRef.current.value

        handleAddNewMovie({title, description, posterURL, rating, wiki})
    }

    return (
        <>
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addMovieModal">
            Add Movie
            </button>

            <div class="modal fade" id="addMovieModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabel">Add a New Movie</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <input type="text" class="form-control mb-2" placeholder="Movie Title" id="movieTitle" ref={titleRef}/>
                            <input type="text" class="form-control mb-2" placeholder="Description" id="movieDescription" ref={descriptionRef}/>
                            <input type="text" class="form-control mb-2" placeholder="Poster URL" id="moviePoster" ref={posterRef}/>
                            <input type="number" class="form-control mb-2" placeholder="Rating" id="movieRating" min="1" max="10" ref={ratingRef}/>
                            <input type="text" class="form-control-mb-2" placeholder="Wiki page" id="movieWiki" ref={wikiRef}/>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddingNew}>Save Movie</button>
                        </div>

                    </div>
                </div>
            </div>
        </>        
    )
}

export default AddMovie