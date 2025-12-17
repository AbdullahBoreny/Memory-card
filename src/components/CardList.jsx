import "./CardList.css";
import Card from "./Card";


export default function CardList({handleCardClick,cards}) {
    return (
        <div className="cards-container">
        
            {cards.map((card) => {
                return <Card
                key={card.key}
                onClick = {handleCardClick}
                 index = {card.index}/>
            })}
        </div>
    )
}