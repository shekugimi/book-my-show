import React, { useState, useEffect } from 'react'
import "./SimilarMovies.css"
import MovieCard from '../MovieCard/MovieCard'
import { useParams } from 'react-router-dom';
import Loading from '../../../global/Loading/Loading'

const SimilarMovies = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = () => {
        fetch(`https://api.tvmaze.com/shows/${params.id}`)
            .then(response => response.json())
            .then(response => {
                setData(response);
                setLoading(false);
                console.log("data", response);
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
                    <div className="similar-movies">
                        <p className="sm_title">More Episodes</p>
                        {
                            data.map((item) => (
                                <MovieCard className="sm-movie-card"
                                    image={item.image.medium} name={item.name} key={item.id} id={item.id} />

                            ))
                        }

                    </div>

            }
        </>
    )
}

export default SimilarMovies