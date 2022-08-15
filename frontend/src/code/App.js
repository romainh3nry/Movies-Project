import {createGlobalStyle} from 'styled-components';
import {Container} from 'react-bootstrap';
import Header from './Header';
import Home from './Home';
import Movies from './Movies';
import Search from './Search';
import {
  Routes,
  Route,
} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(147deg, #000000 0%, #04619f 74%) no-repeat center center fixed; 
    background-color: #000000;
  }
`

const App = () => {
  return (
    <>
        <GlobalStyle />
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/" element={<Movies />} />
            <Route path="/search/" element={<Search />} />
          </Routes>
        </Container>
    </>
  )  
}

export default App;
