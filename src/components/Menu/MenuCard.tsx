import { useEffect, useState } from "react";
import { IMenuCards } from "./menu.types";
import "./menu.styles.css";

export function MenuCard({
  image,
  inCartButton,
  name,
  price,
  isEnabledButton: enabledButton,
  id,
}: IMenuCards) {
  const [buttonDisplay, setButtonDisplay] = useState("add to cart");
  const [stateInCartButton, setStateInCartButton] = useState(false);

  useEffect(() => {
    if (!enabledButton) {
      setButtonDisplay("Add to cart");
      setStateInCartButton(false);
    } else {
      setButtonDisplay("In cart");
      setStateInCartButton(true);
    }
  }, [enabledButton]);
  return (
    <div className="menuCard">
      <div className="imageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="infoContainer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
        <button className="buyButton" onClick={() => inCartButton(id)}>
          {buttonDisplay}
        </button>
      </div>
    </div>
  );
}
