import { useEffect, useState } from "react";
import { ICartImage } from "./types";

export function CartImg ({id, img, numb, deleteDish}:ICartImage){

    const [isEmptyCart, setIsEmptyCart] = useState <boolean>(false)
    const [numberToDisplay, setNumberToDisplay] = useState(numb)
    useEffect(()=>{
        if(!numb || numb <= 0){
            setIsEmptyCart(true)
            setNumberToDisplay(0)
        } else{
            setIsEmptyCart(false)
            setNumberToDisplay(numb)
        }
    }, [numb])

    return(
        <div>
            <img src={img}/>
            { !isEmptyCart &&<h3>{numberToDisplay}</h3>}
            { isEmptyCart &&<img onClick={()=>deleteDish(id)} src="./assets/garbage" alt="delete item from cart" />}
        </div>
    )
}