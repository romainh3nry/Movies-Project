import styled from 'styled-components';


const StyledContainer = styled.div`
    background-color:inherit;
    height: 100%;
    width: 260px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
`

const StyledLink = styled.a`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color #20bf55;
        background-image linear-gradient(315deg, #20bf55 0%, #01baef 74%);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }
`

const StyledTitle = styled.h3`
    color: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
    font-size: 25px;
    padding: 6px 8px 6px 16px;
    display: block;
    font-style: italic;
    letter-spacing: 5px;
    background-color #20bf55;
    background-image linear-gradient(315deg, #20bf55 0%, #01baef 74%);
    border-radius: 30px;
`

const SideBar = () => {
    return (
        <StyledContainer>
            <StyledTitle>Movies Project</StyledTitle>
            <StyledLink href="#">All Movies</StyledLink>
            <StyledLink href="#">Best Movies</StyledLink>
            <StyledLink href="#">Worst Movies</StyledLink>
        </StyledContainer>
    )
}

//https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg
//https://api.themoviedb.org/3/find/tt0111161?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query&external_source=imdb_id
export default SideBar;
