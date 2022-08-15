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
    padding: 5px;
    border: 2px solid transparent;
    display: block;
    width: 100%;
`

const Search = () => {
    return (
        <StyledDiv>
            <StyledInputText type={"text"} placeholder={"Search a movie..."} />
        </StyledDiv>
    )
}

export default Search;