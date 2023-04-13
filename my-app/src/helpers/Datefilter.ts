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
            newList.push(list[i])
        }
    }
    return newList
}
export const formatDate = (date : Date): string => {
    const format = date.toDateString()
    const year = date.getFullYear();
    const mounth = date.getMonth();
    let day = parseInt(format.split(' ')[2])

    return `${addZeroToDate(day)}/${addZeroToDate(mounth)}/${year}`
}
export const addZeroToDate = (n :number ): string => n < 10 ? `0${n}` : `${n}`

export const formatMonth = (currentMonth : string): string => {
    let [year , month] = currentMonth.split('-')
    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ];
      month = months[parseInt(month)-1]
      const formatedDate = `${month} de ${year}`

      return  formatedDate
}