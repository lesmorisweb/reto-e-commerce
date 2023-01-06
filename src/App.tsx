import { useEffect, useState } from 'react';
import './App.css'
import { MenuCard } from './components/menu/MenuCard';
import { Cart, Dish } from './Data/FakeService';

function App() {
  // Me ayudaron
  const [cart, setCart] = useState(new Cart());
  const [menuDishes, setMenuDishes] = useState<Dish[]>();

  useEffect(()=> {
    setMenuDishes(cart.getDishes())
  },[cart])

  useEffect(()=> {
    console.log(menuDishes);
  
  },[menuDishes])

  return (
    <div className="App">
      <div className='menu'>
        <h2>Go To Menu</h2>
        
      </div>
      <div className='cart'>

      </div>
    </div>
  )
}

export default App
