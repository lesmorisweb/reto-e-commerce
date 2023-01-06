export interface IDishMenu {
    foodImg: string,
    foodName: string,
    price: number,
    isInCart: boolean,
    onAddToCart: ()=> void,
    onRemovFromCart: ()=> void
}

