import { IButton } from "../../../../interfaces/components/button"

export interface IInreaseDecreaseButton extends IButton{
    direction: tButtonDirection,
}

export type tButtonDirection = "add" | "remove"