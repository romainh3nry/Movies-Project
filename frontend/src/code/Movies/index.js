import styled from 'styled-components';
import {Row, Col, Container} from 'react-bootstrap';
import React from "react";
import axios from 'axios';


const moviesListReducer = (action, state) => {
    switch (action.type) {
        case 'MOVIES_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'MOVIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        case 'MOVIES_FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

const Movies = () => {

    const handleFetchMovies = (page) => {
        dispatchMovies({type: 'MOVIES_FETCH_INIT'})
        axios
            .get(`http://127.0.0.1:8000/api/v1/movies/all/?page=${page}`)
    }

    const [movies, dispatchMovies] = React.useReducer(
        moviesListReducer,
        {data: [], isLoading: false, isError: false}
    )

    React.useEffect(() => {
        handleFetchMovies(1)
    }, [])

    return (
        'all movies'
    )
}

export default Movies;
