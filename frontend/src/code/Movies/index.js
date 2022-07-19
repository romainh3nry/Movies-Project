import styled from 'styled-components';
import {Row, Col, Container} from 'react-bootstrap';
import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


const getUrl = (page) => (
    `http://127.0.0.1:8000/api/v1/movies/all/?page=${page}`
)

const extractPage = (url) => {
    const page = url.split('=')
    return parseInt(page[1])
}

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

    const [movie, dispatchMovie] = React.useReducer(
        moviesListReducer,
        {data: [], isLoading: false, isError: false}
    )
    const [urls, setUrls] = React.useState(getUrl(1))

    const handleFetchMovies = React.useCallback(() => {
        dispatchMovie({type: 'MOVIES_FETCH_INIT'})
        axios
            .get(urls)
            .then(result => {
                dispatchMovie({
                    type: 'MOVIES_FETCH_SUCCESS',
                    payload: result.data,
                })
            })
            .catch(() => {
                dispatchMovie({type: 'MOVIES_FETCH_FAILURE'})
            })
    }, [urls])

    React.useEffect(() => {
        handleFetchMovies()
    }, [handleFetchMovies])

    const handleDisplay = (page) => {
        const url = getUrl(page)
        setUrls(url);
    }

    const handleNext = () => {
        const page = extractPage(urls)
        handleDisplay(page + 1)
    }

    const handlePrevious = () => {
        const page = extractPage(urls)
        handleDisplay(page - 1)
    }

    return (
        <>
        'all movies'
        <button onClick={handlePrevious} type="button">Previous</button>
        <button onClick={handleNext} type="button">Next</button>
        </>
        
    )
}

export default Movies;
