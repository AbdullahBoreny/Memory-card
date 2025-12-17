import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/CardList'
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState([{
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
  const [maxScore, setMaxScore] = useState(0);

  return (
    <div className='app-container'>
     <CardList cards = {cards}/>

   
       
    </div>
    
  )
}

export default App
