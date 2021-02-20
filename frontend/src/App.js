import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Home from "./Home";
import Persantage from "./components/Persantage";

function App() {
  return (
    <>
      {/* <div>
        <Switch>
          <Route path="/persantage" component={Persantage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/works" component={Works} exact />
          <Route path="/contact" component={Contact} exact/>
          <Route path="/" component={Home} exact/>
        </Switch>
      </div> */}

      <Home />
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
