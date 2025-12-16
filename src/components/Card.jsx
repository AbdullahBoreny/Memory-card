import { use, useEffect, useState } from "react";
import "./Card.css";
import Logo from "../assets/react.svg";
import axios from "axios";

export default function Card() {
  const [score, setScore] = useState(0);
  const [img, setImg] = useState("");
   
  useEffect(() => {
   
   axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => setImg(response.data.sprites.front_default))
  },[]);

  return (
    <div>
      <img src={img} className="card-image"/>
    </div>
  );
}
