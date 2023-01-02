import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <BrowserRouter >
        <Nav>
        <GiKnifeFork />
          <Logo>
          <Link to={'/'}> Deleciousss </Link>
          </Logo>
        </Nav>
      <Search />
      <Category />
      <Pages /> 
    </BrowserRouter>
  );
}

const Nav = styled.div`
    padding: 4rem 0rem;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    svg{
      font-size: 2rem;
    }
`

const Logo = styled.div`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
`

export default App;
