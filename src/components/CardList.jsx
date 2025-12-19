import "./CardList.css";
import Card from "./Card";


export default function CardList({getPokemon,handleCardClick,cards}) {
    return (
        <div className="cards-container">
        
            {cards.map((card) => {
                return <Card
                getPokemon = {getPokemon}
                key={card.key}
                onClick = {handleCardClick}
                 index = {card.index}/>
            })}
        </div>
    )
}