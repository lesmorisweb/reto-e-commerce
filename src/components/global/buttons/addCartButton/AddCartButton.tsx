import { useEffect, useState } from "react";
import { IButton } from "../../../../interfaces/components/button";


export function AddCartButton ({isEnabled, buttonClick}:IButton){

    const [textButton, useTextButton] = useState("")

    useEffect(()=>{
        if (isEnabled){
            useTextButton("In cart")
        } else {
            useTextButton("Add to cart")
        }
    },[isEnabled])

    return(
        <button onClick={buttonClick}>
            <h3>{textButton}</h3>
        </button>
    )
}