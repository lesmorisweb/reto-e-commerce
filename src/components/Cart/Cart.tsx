import { useEffect, useState } from "react";
import { ICard } from "../Menu/menu.types";
import "./cart.styles.css";

export function Cart({ image, name, price }: ICard) {
  const [quantity, setQuantity] = useState(0);

  const [displayTotalPrice, setDisplayTotalPrice] = useState(0);

  useEffect(() => {
    setDisplayTotalPrice(quantity * price);
  }, [quantity]);

  function increaseButton() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseButton() {
    setQuantity((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }
  return (
    <div className="cartComponent">
      <div className="imageContainerCart">
        <img className="cardimg" src={image} alt={name} />
        <span className="spanQuantity">{quantity}</span>
      </div>
      <div className="infoContainer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <div className="buttonsSection">
          <button className="increaseDecreaseButton" onClick={decreaseButton}>
            {"<"}
          </button>
          <span className="quantityCart">{quantity}</span>
          <button className="increaseDecreaseButton" onClick={increaseButton}>
            {">"}
          </button>
          <div className="totalPrice">
            <h4>${displayTotalPrice}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
