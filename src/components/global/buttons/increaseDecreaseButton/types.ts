import { IButton } from "../../../../interfaces/components/button"

export interface IInreaseDecreaseButton extends IButton{
    direction: tButtonDirection,
    id: number,
    onarrowAcction: (id:number)=> void
}

export type tButtonDirection = "add" | "remove"