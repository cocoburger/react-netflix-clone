import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../../api/axios";
import {isTSIntersectionType} from "eslint-plugin-react/lib/util/ast";

function DetailPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});


    console.log(movieId);

    useEffect(() => {
        async function fetchData () {
            const result = await axios.get(`/movie/${movieId}`);
            console.log(result);
            setMovie(result?.data)
        }
        fetchData();
    }, [movieId]);

    if (!movie) return <div>...loading</div>
    return (
        <section>
            <img className='modal__poster-img'
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                 alt='이미지' />
        </section>
    );
}

export default DetailPage;
