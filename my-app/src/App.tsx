import React from 'react';
import * as C from './App.styles';  
import './App.css'
import { useState,useEffect } from 'react';
import { Item } from './types/Item';
import { Categoria } from './types/Categories'
import { categories } from './data/categories';
import { itens } from './data/itens';
import {getCurrentMonth , filterbyMount} from './helpers/Datefilter'
import { Table } from './components/table/Table';
import { InfoArea } from './components/infoArea';
export default function App() {
  const [lista , Setlista] = useState(itens)
  const [listaFiltrada , Setlistafiltrada] = useState<Item[]>([])
  const [categorias , Setcategoria] = useState(categories)
  const [currentMonth, SetcurrentMonth] = useState(getCurrentMonth)

  useEffect(()=>{
    Setlistafiltrada(filterbyMount(lista , currentMonth))
  },[lista,currentMonth])
  console.log(listaFiltrada)
  return (
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          <InfoArea/>
          <Table list={listaFiltrada}  />
        </C.Body>
      </C.Container>

  );
}


