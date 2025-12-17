import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList'
import Card from './components/Card'

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
  function shuffleCards() {
    setCards(prev => [...prev].sort(() => Math.random() - 0.5));
  }
  function handleCardClick(id) {
    if(indices.includes(id)) {
      setMaxScore(prev => Math.max(prev,score))
      setScore(0);
      setIndices([])
      shuffleCards();
      return;
    }
    setScore(prev => prev + 1);
    
    setIndices(prev => [...prev, id])
    shuffleCards();
       
  }

  return (
    <div>
      <h1>Score:{score}</h1>
      <h1>maxScore:{maxScore}</h1>
     <CardList
     setScore = {setScore}
     score ={score}
     handleCardClick = {handleCardClick}
      cards = {cards}/>

   
       
    </div>
    
  )
}

export default App
