import {  useEffect, useState } from "react";
import "./CardList.css";
import Card from "./Card";


export default function CardList({cards}) {
    return (
        <div className="cards-container">
        
            {cards.map((card) => {
                return <Card index = {card.index}/>
            })}
        </div>
    )
}