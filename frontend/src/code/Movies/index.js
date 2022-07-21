import styled from 'styled-components';
import {Row, Col, Container} from 'react-bootstrap';
import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


//https://api.themoviedb.org/3/movie/tt7781432?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US
//https://image.tmdb.org/t/p/original

const StyledPoster = styled.div`
    background-color #20bf55;
    background-image linear-gradient(315deg, #20bf55 0%, #01baef 74%);
    padding: 5px;
    margin-top: 10px;
`
const StyledImg = styled.img`
    max-width:100%;
    max-height:100%;
`

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
    const [image, setImage] = React.useState([])

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

    const handleDisplay = (page) => {
        const url = getUrl(page)
        setUrls(url);
    }

    const handleNext = () => {
        setImage([])
        const page = extractPage(urls)
        handleDisplay(page + 1)
    }

    const handlePrevious = () => {
        setImage([])
        const page = extractPage(urls)
        handleDisplay(page - 1)
    }

    React.useEffect(() => {
        setImage([])
        handleFetchMovies()
    }, [handleFetchMovies])

    React.useEffect(() => {
        setImage([])
        if (movie.payload !== undefined) 
        {
            movie.payload.results.map(elt => {
                axios
                    .get(`https://api.themoviedb.org/3/movie/${elt.imdb_title_id}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US`)
                    .then(result => {
                        setImage(prevValue => [...prevValue, `https://image.tmdb.org/t/p/original${result.data.poster_path}`])
                    })
            })
        }
    }, [movie])

    return (
        <Container>
            <Row>
                {image.map((elt, index) => {
                    return (
                        <Col key={index} lg={2} md={4} sm={6} xs={6}>
                            <StyledPoster>
                                <StyledImg src={elt} width={"auto"} height={300} />
                            </StyledPoster>
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Col lg={6}>
                    <button onClick={handlePrevious} type="button">Previous</button>
                </Col>
                <Col lg={6}>
                    <button onClick={handleNext} type="button">Next</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Movies;
