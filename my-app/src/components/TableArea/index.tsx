import React from "react"
import * as C from './styles'
type Props = {
    item : string | number | Date
}

export const TableArea = ({item} :Props) => {
    return(

         <td>
            <C.TableLine>
             {typeof item === "object" && item instanceof Date 
             ? item.toLocaleDateString()
            : item}
          </C.TableLine>
         </td>
    )
}