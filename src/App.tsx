import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { MenuCard } from "./components/Menu/MenuCard";
import { ICard, IMenuCards } from "./components/Menu/menu.types";

function App() {
  const [arrayMenuCard, setArrayMenuCard] = useState<IMenuCards[]>([
    {
      image:
        "https://raw.githubusercontent.com/makeitrealcamp/challenges-for-holidays/main/02-eCommerce/STARTER-FILES/images/plate__french-fries.png",
      id: 0,
      name: "French Fries with ketchup",
      isEnabledButton: false,
      inCartButton: addItemToCard,
      price: 2.23,
    },
    {
      id: 1,
      image:
        "https://github.com/makeitrealcamp/challenges-for-holidays/blob/main/02-eCommerce/STARTER-FILES/images/plate__salmon-vegetables.png?raw=true",
      name: "Salmon and vegetables",
      price: 5.12,
      isEnabledButton: false,
      inCartButton: addItemToCard,
    },
  ]);

  const [arrayCartCards, setArrayCartCards] = useState<ICard[]>([]);

  function addItemToCart(id: number) {
    const foundItemIndex = arrayMenuCard.findIndex(
      (element) => element.id === id
    );
    if (foundItemIndex === -1) {
      throw new Error("no existe ese item");
    }
    const temporalArray: ICard[] = arrayCartCards.slice();

    if ((temporalArray.indexOf((element) => element.id) === id) !== -1) {
      temporalArray.push({
        id: arrayMenuCard[foundItemIndex].id,
        image: arrayMenuCard[foundItemIndex].image,
        name: arrayMenuCard[foundItemIndex].name,
        price: arrayMenuCard[foundItemIndex].price,
      });
    }

    setArrayCartCards(temporalArray);
  }

  function addItemToCard(id: number) {
    const arrayCopy = arrayMenuCard.slice();
    const indexToChange = arrayCopy.findIndex((element) => element.id === id);
    arrayCopy[indexToChange].isEnabledButton = true;
    setArrayMenuCard(arrayCopy);
  }

  return (
    <div className="body">
      <div className="menu">
        <h3>GO TO MENU</h3>
        {arrayMenuCard &&
          arrayMenuCard.map((item) => (
            <MenuCard
              image={item.image}
              id={item.id}
              name={item.name}
              price={item.price}
              isEnabledButton={item.isEnabledButton}
              inCartButton={() => {
                addItemToCart(item.id);
                addItemToCard(item.id);
              }}
              key={item.id}
            />
          ))}
      </div>
      <div className="cart">
        <h3>GO TO CART</h3>
        {arrayCartCards &&
          arrayCartCards.map((item) => (
            <Cart
              image={item.image}
              id={item.id}
              name={item.name}
              price={item.price}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
