import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPokemon from "./container/ListPokemon/ListPokemon";
import DetailPokemon from "./container/DetailPokemon/DetailPokemon";
import MyPokemon from "./container/MyPokemon/MyPokemon";
import Navbar from "./components/Navbar/Navbar";
import MyPokemonsContextProvider from "./context/MyPokemonsContext";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";

const link = from ([
  new HttpLink({uri: "https://graphql-pokeapi.vercel.app/api/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
}

export default App;
