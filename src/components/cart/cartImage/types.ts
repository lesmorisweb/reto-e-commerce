export interface ICartImage{
    id:number,
    numb?: number,
    img: string,
    deleteDish: (id: number)=> void
}