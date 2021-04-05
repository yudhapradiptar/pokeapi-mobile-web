import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPokemon from "./container/ListPokemon/ListPokemon";
import DetailPokemon from "./container/DetailPokemon/DetailPokemon";
import MyPokemon from "./container/MyPokemon/MyPokemon";
import Navbar from "./components/Navbar/Navbar";
import MyPokemonsContextProvider from "./context/MyPokemonsContext";

function App() {
  return (
    <div className="App">
      <MyPokemonsContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={ListPokemon} />
          <Route exact path="/my-pokemon" component={MyPokemon} />
          <Route exact path={"/detail/:name"} component={DetailPokemon} />
        </Switch>
        <Navbar />
      </Router>
      </MyPokemonsContextProvider>
    </div>
  );
}

export default App;
