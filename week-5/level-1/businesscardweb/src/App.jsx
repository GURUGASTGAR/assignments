import { useState } from 'react'
import { CardComponent } from './CardComponent'

function App() {
  const [card , setCard] = useState({})

  return (
    <div>
      <CardComponent name = "guru"  description = " hello there" interests = {["playng","runnun"]} social={["linkden","facebook"]}/>
    </div>
  )
}

export default App
