import { useEffect, useState } from "react";
import { IInreaseDecreaseButton } from "./types";
// import"./increaseDecreaseButon.css"


export function IncreaseDecreaseButton ({onarrowAcction, direction, isEnabled, id}:IInreaseDecreaseButton){

    const [icon, setIcon] = useState ("")

    useEffect(()=>{
        if(direction==="add"){
            setIcon("./increaseDecreaseButton/assets/chevron-right-solid.svg")
        } else {
            setIcon("./assets/chevron-left-solid.svg")
        }
    },[direction])

    return (
        <button disabled={!isEnabled} onClick={()=> onarrowAcction(id)}>
            <img src={icon}></img>
        </button>
    )
}