import { PokeList } from "./PokeList";
import "../stylesheet/App.scss";
import data from "../data.json";
import { useState } from "react";

function App() {
  const [Pokemons] = useState(data);
  return (
    <div className="App">
      <h1> Mi lista de pokemon</h1>
      <PokeList Pokemons={Pokemons} />
    </div>
  );
}

export { App };
