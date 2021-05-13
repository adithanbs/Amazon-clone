import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/">
            <Header />
            </Route>


        <Route path="/checkout">
        <h1>checkout</h1>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
