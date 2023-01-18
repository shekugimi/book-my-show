import React from 'react'
import "./MovieCard.css"
import { Link } from 'react-router-dom'

const MovieCard = ({ image, name, id }) => {
  return (
    <div className='movie-card'>
      <div className="movie-card-wrap">
        <img src={image} alt="" />
        <p className='movie-card-title'>{name}</p>
        <Link to={`/movie/${id}`}>Play Now</Link>
      </div>
    </div>
  )
}

export default MovieCard