import { useEffect, useState } from "react";
import { IButton } from "../../../../interfaces/components/button";
import { IAddCartButton } from "./types";


export function AddCartButton ({isEnabled, addItemsCartButton,id, text }:IAddCartButton){

    const [textButton, useTextButton] = useState("")

    useEffect(()=>{
        if (isEnabled){
            useTextButton(text)
        } else {
            useTextButton(text)
        }
    },[isEnabled])

    return(
        <button onClick={()=>{addItemsCartButton(id)}}>
            <h3>{textButton}</h3>
        </button>
    )
}