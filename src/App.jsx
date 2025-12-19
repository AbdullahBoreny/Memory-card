import { useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import Card from './components/Card'
import axios from "axios";


function App() {
  const cardsList = ([{
    index: 1,
    key :crypto.randomUUID()
  },
  {
    index: 2,
    key :crypto.randomUUID()
  },
  
  {
    index: 3,
    key :crypto.randomUUID()
  },
  
  {
    index: 4,
    key :crypto.randomUUID()
  },
  
  {
    index: 5,
    key :crypto.randomUUID()
  },
  
  {
    index: 6,
    key :crypto.randomUUID()
  },
    {
    index: 7,
    key :crypto.randomUUID()
  },
    {
    index: 8,
    key :crypto.randomUUID()
  },
    {
    index: 9,
    key :crypto.randomUUID()
  },
    {
    index: 10,
    key :crypto.randomUUID()
  },
   {
    index: 11,
    key :crypto.randomUUID()
  },
   {
    index: 12,
    key :crypto.randomUUID()
  },
]);
  const [cards,setCards] = useState(cardsList);
  const [score, setScore] = useState(0);
  const [indices, setIndices] = useState([])
  const[maxScore,setMaxScore] = useState(0);
  const [pokemonCache, setPokemonCache] = useState({});

  async function getPokemon(index) {
    if(pokemonCache[index]) return pokemonCache[index];
    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${index}`
      );
      const data = {
        img:  response.data.sprites.other["official-artwork"].front_default,
        text: response.data.name
      };
      setPokemonCache(prev => ({
        ...prev,
         [index] : data,
      }
    ))
    return data;
      
  }
  function shuffleCards() {
    setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5));
  }
  function handleCardClick(index) {
    if(indices.includes(index)) {
      setMaxScore(prevScore => Math.max(prevScore,score))
      setScore(0);
      setIndices([])
      shuffleCards();
      return;
    }
    setScore(prevScore => prevScore + 1);
    
    setIndices(prevIndices => [...prevIndices, index])
    shuffleCards();
       
  }

  return (
    <div>
      <div className='how-to-play'>welcome to memory card  game, never click on a card twice !!</div>
      <div className='score-info'>Score: {score}</div>
      <div className='max-score-info'>Max Score: {maxScore}</div>
      <div className='how-to-play'>{score ===0 && maxScore > 0 ? "Bravo! try again" :""}</div>
     <CardList
     setScore = {setScore}
     score ={score}
     handleCardClick = {handleCardClick}
     getPokemon = {getPokemon}
      cards = {cards}/>

   
       
    </div>
    
  )
}

export default App
