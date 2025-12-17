import { useEffect, useState } from "react";
import "./Card.css";
import Logo from "../assets/react.svg";
import axios from "axios";

export default function Card({ onClick,index }) {
  const [img, setImg] = useState("");
  const [text, setText] = useState("");
  const fetchImage = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((response) => setImg(response.data.sprites.front_default));
  };
  const fetchText = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then((response) => setText(response.data.name));
  };
  useEffect(() => {
    fetchImage();
    fetchText();
  },[]);

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
