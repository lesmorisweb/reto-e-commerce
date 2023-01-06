import { IPrice } from "./IPrice";

export function Prices ({price}:IPrice){

    return(
        <div>
            <h1>{price}</h1>
        </div>
    )
}