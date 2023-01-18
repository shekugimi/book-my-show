import React, { useState, useEffect } from 'react'
import Loading from '../../global/Loading/Loading';
import MovieCard from './MovieCard/MovieCard';
import "./Movies.css"

const Movies = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = () => {
        fetch("https://api.tvmaze.com/search/shows?q=boy")
            .then(response => response.json())
            .then(response => {
                setData(response);
                setLoading(false);
                // console.log(response);
            }
            )
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchMovies();
    }, [])


    return (
        <>
            {
                (loading) ? <Loading /> :
                    <div className="movies">
                        {
                            data.map((item) => (
                                <MovieCard
                                    image={item.show.image.medium} name={item.show.name} key={item.score} id={item.show.id} />

                            ))
                        }
                    </div>}

        </>
    )
}

export default Movies
