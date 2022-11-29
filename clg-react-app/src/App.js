import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/List";
import ContactForm from "./components/contactForm";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/MainHeader";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/footer";
import Work from "./pages/work";
import Contact from "./pages/contact";
import FourOhFour from "./pages/fourohfour";
import "./fonts/Editor'sNote-Italic.woff";
import "./fonts/Editor'sNote-Regular.woff";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <MovieList /> */}
      {/* <ContactForm /> */}
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
