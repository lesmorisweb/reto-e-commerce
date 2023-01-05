import { IYourCart } from "./ICar";

export function YourCart ({img, lessButton, numberDishes, plusButton, price, title, totalPrice}:IYourCart){
    return (
        <div className="yourCarCard">
            <div className="titleSection">
                <h1>YourCart</h1>
            </div>
            <div className="foodImage">
                <img src={img}/>     
            </div>
            <div className="infoFood">
                <h3>{title}</h3>
                <h4>{price}</h4>
            </div>
            <div className="buySection">
                <button>{lessButton}</button>
                <button>{numberDishes}</button>
                <button>{plusButton}</button>
                <h2>{totalPrice}</h2>
            </div>
            
        </div>
    )
}