import * as C from './StyledTable'
import { Item } from '../../types/Item'
import { TableArea } from '../TableArea'
type Props = {
    list : Item[]
}

export const Table = ({list} : Props) => {
    return(
        <C.StyledTable>
            <thead>
                <C.TableHeadColum largura={100}>Data</C.TableHeadColum>
                <C.TableHeadColum largura={130}>Categoria</C.TableHeadColum>
                <C.TableHeadColum largura={120}>Titulo</C.TableHeadColum>
                <C.TableHeadColum largura={100}>Valor</C.TableHeadColum>
            </thead>
            <tbody>
                {list.map((item,index) => (
                    <tr key={index}>
                        <TableArea item={item.date}/>
                        <TableArea item={item.category}/>
                        <TableArea item={item.title}/>
                        <TableArea item={item.value}/>
                    </tr>
                ))}
            </tbody>
        </C.StyledTable>
    )
}
