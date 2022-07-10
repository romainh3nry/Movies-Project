import {createGlobalStyle} from 'styled-components';
import SideBar from './SideBar';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(147deg, #000000 0%, #04619f 74%) no-repeat center center fixed; 
    background-color: #000000;
  }
`

const App = () => {
  return (
    <div>
        <GlobalStyle />
        <SideBar />
    </div>
  )  
}

export default App;
