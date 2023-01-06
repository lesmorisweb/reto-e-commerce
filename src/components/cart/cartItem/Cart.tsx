import { useEffect, useState } from "react";
import { IncreaseDecreaseButton } from "../../global/buttons/increaseDecreaseButton/IncreaseDecraseButton";
import { Prices } from "../../global/labels/price/Price";
import { CartImg } from "../cartImage/CartImage";
import { IYourCart } from "./types";

export function YourCart ({img, numberDishes, price, title, totalPrice, deleteDish, buttonClick}:IYourCart){
    
    const [enabledButton, setEnabledButton] = useState <boolean>(true)
    useEffect (()=>{
        setEnabledButton(!(numberDishes<=0))
    }, [numberDishes])

    return (
        <div className="yourCarCard">
            
            <div className="foodImage">
                <CartImg img={img} deleteDish = {deleteDish}/>     
            </div>
            <div className="infoFood">
                <h3>{title}</h3>
                <h4>{price}</h4>
            </div>
            <div className="buySection">
                <IncreaseDecreaseButton buttonClick={buttonClick} direction={"remove"} isEnabled = {enabledButton}/>
                <h5>{numberDishes}</h5>
                <IncreaseDecreaseButton buttonClick={buttonClick} direction={"add"} isEnabled = {enabledButton}/>
                <Prices price={totalPrice}/>
            </div>
            
        </div>
    )
}