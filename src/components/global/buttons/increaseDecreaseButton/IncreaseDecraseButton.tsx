import { useEffect, useState } from "react";
import { IInreaseDecreaseButton } from "./types";

export function IncreaseDecreaseButton ({buttonClick, direction, isEnabled}:IInreaseDecreaseButton){

    const [icon, setIcon] = useState ("")

    useEffect(()=>{
        if(direction==="add"){
            setIcon("./assets/chevron-right-solid.svg")
        } else {
            setIcon("./assets/chevron-left-solid.svg")
        }
    },[direction])

    return (
        <button disabled={!isEnabled} onClick={buttonClick}>
            <img src={icon}></img>
        </button>
    )
}