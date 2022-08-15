import styled from 'styled-components';
import {Container} from 'react-bootstrap';

const StyledDiv = styled.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 8%;
    width: 50%;
    border-radius: 10px;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(315deg, #20bf55 0%, #01baef 74%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    padding: 9px;
`
const StyledInputText = styled.input`
    padding: 10px;
    border: none;
    width: 100%;
    letter-spacing: 5px;
    font-size: 15px;

    &:focus {
        border: none;
        outline:none;
    }
`

const StyledForm = styled.form`
    width: 100%;
`

const Search = () => {

    const handleSubmit = e => {
        console.log('submitted');
        e.preventDefault();
    }

    return (
        <StyledDiv>
            <StyledForm action='#' onSubmit={handleSubmit}>
                <StyledInputText type={"text"} placeholder={"Search a movie..."} />
            </StyledForm>
        </StyledDiv>
    )
}

export default Search;