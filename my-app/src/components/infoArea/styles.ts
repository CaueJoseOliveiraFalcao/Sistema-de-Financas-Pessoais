import styled from "styled-components";

export const Container = styled.div`
     background-color : #FFF;
     width:100%;
     padding:20px;
     box-shadow: 0px 0px 5px #CCC;
     border-radius:10px;
     margin-top:-40px;
     display: flex;
     align-items: center;
`;
export const MonthArea = styled.div`
      display: flex;
      align-items: center;
      flex: 1;
      padding:20px;
`;
export const MonthArrow = styled.div`
     width: 40px;
     text-align: center;
     font-size: 25px;
     cursor: pointer;
`;
export const MonthTitle = styled.div`
     flex: 1;
     text-align: center;
`;
export const ResumeArea = styled.div`
     padding:20px;
     flex: 2;
     display: flex;
     justify-content: space-between;
     text-align: center;
     font-family: Arial, Helvetica, sans-serif;
     font-weight: bold;
`;

export const ResumeAreaitens = styled.div`
     padding:20px;
`;
export const Somavalor = styled.div<{ cor?: string }>`
      color: ${props => props.cor};
`;