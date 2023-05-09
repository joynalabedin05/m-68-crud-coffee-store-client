
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='m-20'>  
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot hot Cold coffee: {coffees.length}</h1>  
      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee=> <CoffeeCard
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
          ></CoffeeCard> )
        }   
      </div>
    </div>
  )
}

export default App
