export interface IDishMenu {
    foodImg: string,
    foodName: string,
    price: number,
    isInCart: boolean,
    onAddToCart: (id:number)=> void,
    onRemovFromCart: (id:number)=> void,
    
}

