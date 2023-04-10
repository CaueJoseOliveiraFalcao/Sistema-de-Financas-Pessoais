import styled from "styled-components";

export const StyledTable = styled.table`
  background-color : #FFF;
  width:100%;
  padding:20px;
  box-shadow: 0px 0px 5px #CCC;
  border-radius:10px;
  margin-top:20px;

`;

export const TableHeadColum = styled.th<{largura? : number}>`
   padding: 10px 0;
   text-align:left;
   width: ${props => props.largura ? `${props.largura}px` : `auto` };

`;