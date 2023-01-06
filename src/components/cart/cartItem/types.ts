export interface IYourCart{
    img: string,
    title: string,
    price: number,
    numberDishes: number,
    totalPrice: number
    deleteDish: ()=> void,
    buttonClick: ()=> void
}