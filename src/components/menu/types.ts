import { Dish } from "../../Data/FakeService";

export interface IDishMenu {
    dish: Dish,
    onAddToCart: (id:number)=> void,
    onRemovFromCart: (id:number)=> void,
    
}

