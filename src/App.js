import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPokemon from "./container/ListPokemon/ListPokemon";
import DetailPokemon from "./container/DetailPokemon/DetailPokemon";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ListPokemon} />
          <Route exact path="/my-pokemon" component={ListPokemon} />
          <Route exact path={"/detail/:uuid"} component={DetailPokemon} />
        </Switch>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
