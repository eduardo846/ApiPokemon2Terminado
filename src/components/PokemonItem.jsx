import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PokemonItem = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  return (
    <li className="pokemon-item">
      <div className="pokemon-card">
        <h3>{pokemon.name}</h3>
        <br />
        <img src={pokemon.sprites?.other.dream_world.front_default} style={{width:"90px"}} alt="" />
      </div>
    </li>
  );
};

export default PokemonItem;
