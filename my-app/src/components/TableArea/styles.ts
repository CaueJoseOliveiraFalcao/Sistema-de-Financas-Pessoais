import styled from "styled-components";
import { categories } from "../../data/categories";

export const TableContainer = styled.tr`
          background-color: white;
          font-family: Arial, Helvetica, sans-serif;
`;

export const TableLine = styled.td`
    padding: 10px 0;

`;

export const Category = styled.td<{categoryColor : string}>`
    padding: 10px 5px;
    background-color: ${props => props.categoryColor};
    display: inline-block;
    border-radius: 5px;
    color:white;

`;

export const Value = styled.td<{ valueColor: boolean}>`
    padding: 10px 5px;
    background-color: ${props => props.valueColor ? 'red': 'green' };
    display: inline-block;
    border-radius: 5px;
    color:white;

`;