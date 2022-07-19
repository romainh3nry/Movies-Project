import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
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

    const [movies, moviesDispatch] = React.useReducer(
        moviesListReducer,
        {data: [], isLoading: false, isError: false}
    )

    return (
        'all movies'
    )
}

export default Movies;
