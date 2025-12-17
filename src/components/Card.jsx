import { useEffect, useState } from "react";
import "./Card.css";
import Logo from "../assets/react.svg";
import axios from "axios";

export default function Card({ onClick, index }) {
  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );

      setImg(response.data.sprites.other["official-artwork"].front_default);
      setText(response.data.name);
    }

    fetchPokemon();
  }, [index]);
  function handleCardClick() {
    onClick(index);
  }

  return (
    <div onClick={handleCardClick} className="card-container">
      {img && <img src={img} className="card-image" />}
      <div className="image-info">{text ? text : "?"}</div>
    </div>
  );
}
