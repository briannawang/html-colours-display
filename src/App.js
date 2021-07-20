import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation.jsx";
import ColourSheet from './components/colourSheet.js';
import ColourFilter from './components/colourFilter.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/colour-sheet" exact component={() => <ColourSheet />} />
          <Route path="/colour-filter" exact component={() => <ColourFilter />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
