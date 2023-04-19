import { Item } from '../../types/Item'
import * as C from './styles'
import React, { useState } from 'react';
type Props = {
    handleItens : (item : Item) => void
}
export const InputArea = ({handleItens} : Props ) =>{
    const [type,setType] = useState<string>('despesa')
    const [day,Setday] = useState(new Date().getDay())
    const [month,Setmonth] = useState(new Date().getMonth() + 1)
    const [year,Setyear] = useState(new Date().getFullYear())

    const handleAddevent = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let newItem : Item = {
            date : new Date(year,month,day),
            category : type,
            title : 'Item de teste',
            value : 2050
        }
        handleItens(newItem)
        console.log('foi')
    }
    console.log(type)
    return(
        <C.Container>
            <form action="" onSubmit={handleAddevent}>
                <label htmlFor="dia">Dia:</label>
                <C.Inputdata value={day} onChange={(event) => Setday(parseInt(event.target.value))} required type='number' />
                <label htmlFor="dia">Mês:</label>
                <C.Inputdata value={month} onChange={(event) => Setmonth(parseInt(event.target.value))} required type='number' />
                <label htmlFor="dia">Ano:</label>
                <C.Inputdata value={year} onChange={(event) => Setyear(parseInt(event.target.value))} required type='number' />
                <label>
                    Tipo:
                    <select value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="despesa">Despesa</option>
                    <option value="receita">Receita</option>
                    </select>
                </label>
                <button type='submit'>Adicionar</button>
            </form>
        </C.Container>
    )
}   