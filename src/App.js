import { Link, BrowserRouter } from "react-router-dom";
import "./fonts/Editor'sNote-Italic.woff";
import "./fonts/Editor'sNote-Regular.woff";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { MdFoodBank } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <MdFoodBank />
          <Logo to={"/"}>deficit database</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  color: white;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
    color: white;
  }
`;

export default App;
