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
    const [title,Settitle] = useState<string>('')
    const [price,Setprice] = useState<number>(0)

    const handleAddevent = (event : React.FormEvent<HTMLFormElement>) => {
        const randomNumber: number = Math.floor(Math.random() * 10000);
        event.preventDefault();
        let newItem : Item = {
            date : new Date(year,month,day),
            category : type,
            title : title,
            value : price,
            id : randomNumber
        }
        console.log(newItem.id)
        alert('Valor adicionado!')
        handleItens(newItem)
    }
    return(
        <C.Container>
            <C.Form action="" onSubmit={handleAddevent}>
                <C.Mudiv>
                    <label htmlFor="dia">Dia </label>
                    <C.Inputdata value={day} onChange={(event) => Setday(parseInt(event.target.value))} required type='number' />
                    <label htmlFor="dia">Mês </label>
                    <C.Inputdata value={month} onChange={(event) => Setmonth(parseInt(event.target.value))} required type='number' />
                    <label htmlFor="dia">Ano    </label>
                    <C.Inputdata value={year} onChange={(event) => Setyear(parseInt(event.target.value))} required type='number' />
                    <label>
                        Tipo:
                        <select value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="despesa">Despesa</option>
                        <option value="receita">Receita</option>
                        </select>
                    </label>
                </C.Mudiv>
                <C.Mudiv>
                    <label htmlFor="titulo">Nome do Produto </label>
                    <C.InputTexto onChange={(event) => Settitle(event.target.value)} type="text" required />
                    <label htmlFor="valor">Valor </label>
                    <C.InputTexto onChange={(event) => Setprice(parseInt(event.target.value))} type="number" required />
                </C.Mudiv>
                <C.Adicionar type='submit'>Adicionar</C.Adicionar>
            </C.Form>
        </C.Container>
    )
}   