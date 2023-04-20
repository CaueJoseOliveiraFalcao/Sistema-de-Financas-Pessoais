import React from 'react';
import * as C from './App.styles';
import './App.css'
import { useState, useEffect } from 'react';
import { Item } from './types/Item';
import { Categoria } from './types/Categories'
import { categories } from './data/categories';
import { itens } from './data/itens';
import { getCurrentMonth, filterbyMount } from './helpers/Datefilter'
import { Table } from './components/table/Table';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/InputArea';
export default function App() {
  const [lista, Setlista] = useState(itens)
  const [listaFiltrada, Setlistafiltrada] = useState<Item[]>([])
  const [categorias, Setcategoria] = useState(categories)
  const [income , Setincome] = useState(0)
  const [expense , Setexpense] = useState(0)
  const [somaValues , Setsoma] = useState(0)
  const [currentMonth, SetcurrentMonth] = useState(getCurrentMonth)
  console.log(currentMonth)

  useEffect(() => {
    Setlistafiltrada(filterbyMount(lista, currentMonth))
  }, [lista, currentMonth])
  const handleMonth = (newMonth : string) => {
    SetcurrentMonth(newMonth)
  }
  useEffect(() => {
    let income = 0;
    let expense = 0;
    
    for(let i in listaFiltrada){
      if (categories[listaFiltrada[i].category].expense){
        expense += listaFiltrada[i].value
      }
      else{
        income+= listaFiltrada[i].value
      }
    }
    Setincome(income)
    Setexpense(expense)
    Setsoma(income - expense)
  }, [listaFiltrada])
  const handleItens = (item : Item) => {
    let newlist = [...lista]
    newlist.push(item)
    Setlista(newlist)
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
        income={income}
        expense={expense}
        somaValues={somaValues}
         onMonthChange={handleMonth}
         currentmonth={currentMonth} />

         <InputArea handleItens={handleItens}/>

        <Table list={listaFiltrada} />
      </C.Body>
    </C.Container>

  );
}


