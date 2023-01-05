import { IMenu } from "./IMenuCard";

export function MenuCard ({button, image, price, title}:IMenu){
    return (
        <div className="menuCard">
            <img src={image}></img>
            <h3>{title}</h3>
            <h2>${price}</h2>
            <button>{button}</button>
        </div>
    )
}