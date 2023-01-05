import { useEffect, useState } from "react";
import { IInreaseDecreaseButton } from "./Types";

export function IncreaseDecreaseButton ({clickFunction, direction, isEnabled}:IInreaseDecreaseButton){

    const [icon, setIcon] = useState ("")

    useEffect(()=>{
        if(direction==="add"){
            setIcon("./assets/btn-increase.png")
        } else {
            setIcon("./assets/btn-remove.png")
        }
    },[direction])

    return (
        <button disabled={!isEnabled} onClick={clickFunction}>
            <img src={icon}></img>
        </button>
    )
}