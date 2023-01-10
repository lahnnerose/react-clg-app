import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./components/contactForm/contactForm";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Header/header";
import Footer from "./components/footer/footer";
import "./fonts/Editor'sNote-Italic.woff";
import "./fonts/Editor'sNote-Regular.woff";
import Pages from "./pages/Pages";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
