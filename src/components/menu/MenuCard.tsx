import { AddCartButton } from "../global/buttons/addCartButton/AddCartButton";
import { Prices } from "../global/labels/price/Price";
import { IDishMenu } from "./types";

export function MenuCard ({foodImg, foodName, price, isInCart, onAddToCart}:IDishMenu){
    return (
        <div className="menuDishCard">
            <div className="foodImage">
                <img src={foodImg}></img>
            </div>
            <div className="foodInfo">
                <h3>{foodName}</h3>
                <Prices price={price}/>
                <AddCartButton isEnabled={!isInCart} />
            </div>
        </div>
    )
}