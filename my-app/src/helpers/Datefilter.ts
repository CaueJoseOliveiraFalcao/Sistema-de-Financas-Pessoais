import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let dataAtual = new Date()
    return `${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}`;
}
export const filterbyMount = (list:Item[] , mount:string): Item[] =>{
    const newList:Item[] = []
    const [year,month] = mount.split('-');

    for (let i in list){
        if (list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() === parseInt(month)){
            console.log(list[i].date.getMonth(), parseInt(month))
            newList.push(list[i])
        }
    }
    return newList
}