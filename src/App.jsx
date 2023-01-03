import axios from "axios";
import { useEffect, useState } from "react";
import PokemonItem from "./components/PokemonItem";
import "./styles.css";

function App() {
  const [pokemonType, setPokemonType] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 18) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/type/${randomId}/`)
      .then((res) => setPokemonType(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${typeId}/`)
      .then((res) => setPokemonType(res.data));
  };

  console.log(pokemonType);

  return (
    <div className="App">
      <h1><b>Type: {pokemonType.name}</b></h1>
      <input
        type="text"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      />
      <button onClick={searchType}>Search</button>
      <ul className="pokemon-container">
        {pokemonType.pokemon?.map((pokemon) => (
          <PokemonItem url={pokemon.pokemon.url} key={pokemon.pokemon.url} />
        ))}
      </ul>
    </div>
  );
}

export default App;
