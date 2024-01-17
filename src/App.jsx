

import './App.css'
import cars from './data/cars'
import CarListe from './components/carListe/CarListe'

function App() {
  console.log(cars);
  return ( 
      <>
      
      <CarListe cars={cars}/>
      
    </>
  )
}

export default App
