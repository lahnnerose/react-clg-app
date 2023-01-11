import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./components/contactForm/contactForm";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/footer";
import "./fonts/Editor'sNote-Italic.woff";
import "./fonts/Editor'sNote-Regular.woff";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
