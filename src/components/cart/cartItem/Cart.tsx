import { useEffect, useState } from "react";
import { Dish } from "../../../Data/FakeService";
import { IncreaseDecreaseButton } from "../../global/buttons/increaseDecreaseButton/IncreaseDecraseButton";
import { Prices } from "../../global/labels/price/Price";
import { CartImg } from "../cartImage/CartImage";
import { IYourCart } from "./types";
import "./"

export function YourCart ({dish, deleteDish, buttonClick}:IYourCart){
    
    const [enabledButton, setEnabledButton] = useState <boolean>(true)
    useEffect (()=>{
        setEnabledButton(!(dish.quantity <= 0))
    }, [dish])

    return (
        <div className="yourCarCard">
            <div className="foodImage">
                <CartImg img={dish.image} deleteDish={deleteDish} id={0}/>     
            </div>
            <div className="infoFood">
                <h3>{dish.dishName}</h3>
                <h4>{dish.price}</h4>
            </div>
            <div className="buySection">
                <IncreaseDecreaseButton 
                onarrowAcction={()=>deleteDish(dish.id)} 
                direction={"remove"} 
                isEnabled = {enabledButton}
                id = {dish.id}/>
                <h5>{dish.quantity}</h5>
                <IncreaseDecreaseButton 
                onarrowAcction={()=>buttonClick(dish.id)} 
                direction={"add"} 
                isEnabled = {enabledButton}
                id = {dish.id}/>
                <Prices price={dish.price * dish.quantity}/>
            </div>
        </div>
    )
}