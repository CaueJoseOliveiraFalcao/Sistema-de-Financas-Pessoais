import React from "react"
import * as C from './styles'
import { Item } from "../../types/Item"
import { formatDate } from "../../helpers/Datefilter"
import { categories } from "../../data/categories"
type Props = {
    item : Item
}

export const TableArea = ({item} :Props) => {
    return(
            <C.TableContainer>
             <C.TableLine>{formatDate(item.date)}</C.TableLine>
             <C.Category
              categoryColor={categories[item.category].color}
              >{categories[item.category].title}
              </C.Category>
             <C.TableLine>{item.title}</C.TableLine>
             <C.Value valueColor={categories[item.category].expense}>R$ {item.value}</C.Value>
          </C.TableContainer>

    )
}