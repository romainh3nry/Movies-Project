import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledNavBar = styled(Navbar)`
    background-color: inherit;
`;

const StyledBrand = styled(Navbar.Brand)`
    color: black;
    font-size: 20px;
    padding: 6px 8px 6px 16px;
    display: block;
    font-style: italic;
    letter-spacing: 5px;
    background-color #20bf55;
    background-image linear-gradient(315deg, #20bf55 0%, #01baef 74%);
    border-radius: 30px;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    display: block;
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

const StyledInputText = styled.input`
    padding: 5px;
    border-radius: 10px;
    width: 400px;
    border: 2px solid transparent;
`

const Header = () => {

    const navs = ['Movies', 'Search']

    return (
        <StyledNavBar expand="lg">
                <StyledBrand href="/">Movies Project</StyledBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {navs.map((nav, index) => {
                        return (
                            <StyledLink 
                                key={index}
                                to={'/' + nav.split(' ')[0].toLowerCase() + "/"}
                            >{nav}
                            </StyledLink>  
                        )
                    })}
                </Nav>
                </Navbar.Collapse>
        </StyledNavBar>
    )
}

export default Header;
