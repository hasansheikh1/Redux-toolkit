import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';

import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';

const Home = () => {


    const dispatch = useDispatch();

    // const fetchMovies = async () => {
    // }
    useEffect(() => {
        // fetchMovies();
        dispatch(fetchAsyncMovies());
    }, [dispatch])


    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home;