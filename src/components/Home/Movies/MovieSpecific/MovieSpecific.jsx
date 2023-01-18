import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./MovieSpecific.css"
import Loading from "../../../global/Loading/Loading"
import SimilarMovies from '../SimilarMovies/SimilarMovies';

const MovieSpecific = () => {
    const params = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    let hour = (data.runtime / 60).toFixed(0);
    let min = (data.runtime % 60).toFixed(0);


    const fetchDetails = () => {
        fetch(`https://api.tvmaze.com/shows/${params.id}`)
            .then(response => response.json())
            .then(response => {
                setData(response);
                // console.log("Response", response);
                setLoading(false);
            }
            )
            .catch(err => console.error(err));

    }

    useEffect(() => {
        fetchDetails();
    }, [])


    return (
        <>
            {
                (loading) ? <Loading /> :
                    <div className="movie-specific">
                        <div className="ms-top">
                            <div className="ms-left">
                                <img src={data.image.medium} alt="" />
                            </div>
                            <div className="ms-right">
                                <div className="ms-right-top">
                                    <p className="ms-title">
                                        {data.name}
                                    </p>
                                    <div className="ms-genres">
                                        {data.genres.map((item) => (
                                            <span key={item}>{item}</span>
                                        ))}
                                    </div>
                                    <p className='show-time'>Duration: {`${hour}h ${min}min`}</p>
                                </div>

                                <div className="ms-btns">
                                    <button className='ms-btn1 '>Watch Now</button>
                                    <button className='ms-btn2'>Watch Later</button>
                                </div>
                            </div>
                        </div>
                        <div className="ms-bottom"
                            dangerouslySetInnerHTML={{ __html: data.summary }}
                        />
                        {/* <SimilarMovies /> */}
                    </div>
            }
        </>
    )
}

export default MovieSpecific
