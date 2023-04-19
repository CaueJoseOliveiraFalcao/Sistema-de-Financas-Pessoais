import * as C from './styles'
import { formatMonth } from '../../helpers/Datefilter'
import { useState , useEffect } from 'react';
type Props = {
    currentmonth: string;
    onMonthChange : (newMonth : string) => void;
    income : number;
    expense: number;
    somaValues: number;
}

export const InfoArea = ({currentmonth , onMonthChange , income , expense , somaValues} : Props) => {
    let currentMonth = currentmonth;
    let formatedCurrentMonth = formatMonth(currentMonth)
    const handlePrevMonth = () =>{
        let [year , month] = currentMonth.split('-')
        let newCurrentDate = new Date(parseInt(year),parseInt(month) - 1,1)
        newCurrentDate.setMonth(newCurrentDate.getMonth() - 1)
        onMonthChange(`${newCurrentDate.getFullYear()}-${newCurrentDate.getMonth()+ 1}`);
    }
    const handleNextMonth = () =>{
        let [year , month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1 , 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+ 1}`);
    }
    const [valueColor,setvalueColor] = useState('')
    useEffect(() => {
            if (income - expense < 0){
                 setvalueColor('red')
            }
            else{
                setvalueColor('green')
            }
        }
      , [somaValues])
    return(
        <C.Container>
            <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}> ⬅ </C.MonthArrow>
            <C.MonthTitle>{formatedCurrentMonth}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}> ➡ </C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <C.ResumeAreaitens>
                   <p>Receitas</p>
                   <p>R$ {income}</p>
                </C.ResumeAreaitens>
                <C.ResumeAreaitens>
                <p>Despesas</p>
                   <p>R$ {expense}</p>
                </C.ResumeAreaitens>
                <C.ResumeAreaitens>
                <p>Balanço</p>
                   <C.Somavalor cor={valueColor}  >R${somaValues}</C.Somavalor>
                </C.ResumeAreaitens>
            </C.ResumeArea>
        </C.Container>
    )
}