export class Cart {
   private dishes: Dish[] = [
      new Dish(0, "Spaghetti", false, "../assets/plate__spaghetti-meat-sauce.png"),
      new Dish(1, "Bacon Eggs", false, "../../assets/plate__bacon-eggs.png"),
      new Dish(2, "Chicken Salad", false, "../assets/plate__chicken-salad.png"),
      new Dish(3, "Fish Sicks", false, "../assets/plate__fish-sticks-fries.png"),
      new Dish(4, "French Fries", false, "../assets/plate__french-fries.png"),
      new Dish(5, "Ravioli", false, "../assets/plate__ravioli.png"),
      new Dish(6, "Salmon Vegetales", false, "../assets/plate__salmon-vegetables.png"),
      new Dish(7, "Tortellini", false, "../assets/plate__tortellini.png"),
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

   constructor(id: number, dishName: string, inCart: boolean, image:string) {
      this._id = id;
      this._dishName = dishName;
      this._inCart = inCart;
      this._price = getRandomPrice();
      this._image = image;
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

   get image(): string {
      return this._image;
   }

   get dishName():string {
      return this._dishName;
   }

   get inCart():boolean {
      return this._inCart
   }

   get price():number {
      return this._price
   }

   get quantity(): number {
      return this._quantity;
   }

   private verifyInCart() {
      this._inCart = !(this.quantity <= 0);
   }
}

function getRandomPrice(): number {
   return Math.round(Math.random() * 100);
}

