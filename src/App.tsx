import { useEffect, useState } from "react";
import "./App.css";
import { YourCart } from "./components/cart/cartItem/Cart";
import { MenuCard } from "./components/menu/MenuCard";
import { Cart, Dish } from "./Data/FakeService";

function App() {
  const [cart, setCart] = useState(new Cart());
  const [menuDishes, setMenuDishes] = useState<Dish[]>();
  const [buyCart, setBuyCart] = useState<Dish[]>();

  useEffect(() => {
    setMenuDishes(cart.getDishes());
  }, [cart]);

  useEffect(() => {
    console.log(menuDishes);
  }, [menuDishes]);

  function addItemToCart(id: number) {
    setBuyCart(cart.addDish(id));
  }
  function removeItemToCart(id: number) {
    setBuyCart(cart.removeDish(id));
  }

  return (
    <div className="App">
      <div className="background">
        <img src="./src/assets/bg__left.svg" alt="bg-left" className="derecha" />
        <img src="./src/assets/bg__top-right.svg" alt="bg-top-right" className="superior-izquierda" />
      </div>
      <div className="menu">
        <h2>Go To Menu</h2>
        {menuDishes &&
          menuDishes.map((dish, index) => (
            <MenuCard
              dish={dish}
              key={index}
              onAddToCart={addItemToCart}
              onRemovFromCart={removeItemToCart}/>
          ))}
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
          {
            buyCart
            && buyCart.map((dish, index) => <YourCart
            dish={dish}
              deleteDish={removeItemToCart} 
              buttonClick={addItemToCart}/>)
          }
      </div>     
    </div>  )}
export default App
