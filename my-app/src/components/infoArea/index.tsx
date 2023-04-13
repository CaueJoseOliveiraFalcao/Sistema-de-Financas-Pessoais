import * as C from './styles'
import { formatMonth } from '../../helpers/Datefilter'
import { useState } from 'react'
type Props = {
    currentmonth: string;
    onMonthChange : (newMonth : string) => void;
}

export const InfoArea = ({currentmonth , onMonthChange} : Props) => {
    let currentMonth = currentmonth;
    let formatedCurrentMonth = formatMonth(currentMonth)
    const handlePrevMonth = () =>{
        let [year , month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1 , 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`);
    }
    const handleNextMonth = () =>{
        let [year , month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1 , 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+ 1}`);
    }
    return(
        <C.Container>
            <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}> ⬅ </C.MonthArrow>
            <C.MonthTitle>{formatedCurrentMonth}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}> ➡ </C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>

            </C.ResumeArea>
        </C.Container>
    )
}