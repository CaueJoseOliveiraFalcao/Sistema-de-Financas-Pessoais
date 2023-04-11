import React from "react"
import * as C from './styles'
import { Item } from "../../types/Item"
import { formatDate } from "../../helpers/Datefilter"
type Props = {
    item : Item
}


export const TableArea = ({item} :Props) => {
    
    return(
            <C.TableContainer>
             <C.TableLine>{formatDate(item.date)}</C.TableLine>
             <C.TableLine>{item.category}</C.TableLine>
             <C.TableLine>{item.title}</C.TableLine>
             <C.TableLine>R$ {item.value}</C.TableLine>
          </C.TableContainer>

    )
}