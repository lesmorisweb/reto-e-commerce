import { AddCartButton } from "../global/buttons/addCartButton/AddCartButton";
import { Prices } from "../global/labels/price/Price";
import { IDishMenu } from "./types";

export function MenuCard ({dish, onAddToCart}:IDishMenu){
    return (
        <div className="menuDishCard">
            <div className="foodImage">
                <img src={dish.image}></img>
            </div>
            <div className="foodInfo">
                <h3>{dish.dishName}</h3>
                <Prices price={dish.price}/>
                <AddCartButton text={`Add ${dish.dishName} to card`} isEnabled={!dish.inCart} addItemsCartButton={onAddToCart} id={dish.id} />
            </div>
        </div>
    )
}