export interface IInreaseDecreaseButton {
    direction: tButtonDirection,
    isEnabled: boolean,
    clickFunction: ()=> void
}

export type tButtonDirection = "add" | "remove"