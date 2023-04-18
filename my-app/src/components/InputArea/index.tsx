import { Item } from '../../types/Item'
import * as C from './styles'
import React, { useRef } from 'react';
type Props = {
    handleItens : (item : Item) => void
}
export const InputArea = ({handleItens} : Props ) =>{
    const dia = useRef<HTMLInputElement>(null)
    const mes = useRef<HTMLInputElement>(null)
    const ano = useRef<HTMLInputElement>(null)
    const handleAddevent = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const day = dia.current?.value ? parseInt(dia.current.value) : 0;
        const month = mes.current?.value ? parseInt(mes.current.value) : 0;
        const year = ano.current?.value ? parseInt(ano.current.value) : 0;
        let newItem : Item = {
            date : new Date(year,month,day),
            category : 'food',
            title : 'Item de teste',
            value : 2050
        }
        handleItens(newItem)
        console.log('foi')
    }
    return(
        <C.Container>
            <form action="" onSubmit={handleAddevent}>
            <label htmlFor="dia">Dia:</label>
            <C.Inputdata ref={dia} required type='number' />
            <label htmlFor="dia">Mês:</label>
            <C.Inputdata ref={mes} required type='number' />
            <label htmlFor="dia">Ano:</label>
            <C.Inputdata ref={ano} required type='number' />
            <button type='submit'>Adicionar</button>
            <label htmlFor=""></label>
            </form>
        </C.Container>
    )
}   