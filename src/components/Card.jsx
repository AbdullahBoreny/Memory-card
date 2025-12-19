import { useEffect, useState } from "react";
import "./Card.css";
import Logo from "../assets/react.svg";

export default function Card({ getPokemon, onClick, index }) {
   const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    let active = true;
    getPokemon(index).then(data => {
      if (active) setPokemon(data);
    })
    return () => {
      active = false
    }
  }, [index, getPokemon]);


  function handleCardClick() {
    onClick(index);
  }

  return (
    <div onClick={handleCardClick} className="card-container">
      {pokemon.img && <img src={pokemon.img} className="card-image" />}
      <div className="image-info">{pokemon.text ? pokemon.text : "?"}</div>
    </div>
  );
}
