import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/">
            <Header />
            <Home/>
            </Route>


        <Route path="/checkout">
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
