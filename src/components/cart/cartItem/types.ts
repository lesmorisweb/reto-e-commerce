import { Dish } from "../../../Data/FakeService";

export interface IYourCart{
    dish: Dish,
    deleteDish: (id:number)=> void,
    buttonClick: (id:number)=>void
}