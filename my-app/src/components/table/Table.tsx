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
                <C.TableHeadColum largura={100}>Preço</C.TableHeadColum>
            </thead>
            <tbody>
                {list.map((item,index) => (
                        <TableArea key={index} item={item}/>
                ))}
            </tbody>
        </C.StyledTable>
    )
}
