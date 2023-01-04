import logo from "./logo.svg";
import "./App.css";
import ContactForm from "./components/contactForm/contactForm";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Header/header";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/footer/footer";
import Work from "./pages/work";
import Contact from "./pages/contact";
import FourOhFour from "./pages/fourohfour";
import "./fonts/Editor'sNote-Italic.woff";
import "./fonts/Editor'sNote-Regular.woff";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <ContactForm /> */}
      <Pages />
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
