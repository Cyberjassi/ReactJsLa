import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //1. we can send our array and obj in propes
  let array = [1,2,3,4,5]
  let obj = {
    "name":"jaswant",
    "email":"jklajdsklfj"
  }
  return (
    <>
     {/* 1.<Card propsarray={array} mydetail={obj} ></Card> */}
     <Card image = "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg" product = "chameli" price = "10" rating = "4.5"></Card>

     <Card image = "https://cdn.pixabay.com/photo/2016/07/15/04/43/open-doors-1518244_640.png" product = "Darwaja" price = "10" ></Card>
     

    </>
  )
}

export default App
