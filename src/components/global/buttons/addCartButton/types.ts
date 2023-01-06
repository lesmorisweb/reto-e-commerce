import { IButton } from "../../../../interfaces/components/button";

export interface IAddCartButton extends IButton {
    text: string,
    id: number,
    addItemsCartButton: (id:number)=> void
}