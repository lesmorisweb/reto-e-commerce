export class Cart {
   private dishes: Dish[] = [
      new Dish(0, "Spaghetti", false),
      new Dish(1, "Meat", false),
      new Dish(2, "Chicken", false),
      new Dish(3, "Beef", false),
   ]

   public getDishes(): Dish[] {
      return this.dishes;
   }

   public addDish(id: number): Dish[] {
      const dish = this.dishes.find(dish => dish.id === id);
      if (dish) {
         dish.addQuantity();
      }
      return this.dishes;
   }

   public removeDish(id: number): Dish[] {
      const dish = this.dishes.find(dish => dish.id === id);
      if (dish) {
         dish.removeOne();
      }
      return this.dishes;
   }
}

export class Dish {
   private readonly _id: number;
   private _dishName: string;
   private _inCart: boolean;
   private _price: number;
   private _image: string;
   private _quantity: number;

   constructor(id: number, dishName: string, inCart: boolean) {
      this._id = id;
      this._dishName = dishName;
      this._inCart = inCart;
      this._price = getRandomPrice();
      this._image = "https://via.placeholder.com/150";
      this._quantity = 0;
   }

   public addQuantity() {
      this._quantity++;
      this.verifyInCart();
   }

   public removeOne() {
      this._quantity--;
      this.verifyInCart();
   }

   get id(): number {
      return this._id;
   }

   get quantity(): number {
      return this._quantity;
   }

   private verifyInCart() {
      this._inCart = this.quantity <= 0;
   }
}

function getRandomPrice(): number {
   return Math.round(Math.random() * 100);
}




