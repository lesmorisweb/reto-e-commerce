export interface IMenuCards extends ICard {
  isEnabledButton: boolean;
  inCartButton: (id: number) => void;
}

export interface ICard {
  image: string;
  name: string;
  price: number;
  id: number;
}
