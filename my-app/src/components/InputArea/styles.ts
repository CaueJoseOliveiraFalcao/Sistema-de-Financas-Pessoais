import styled from "styled-components";

export const Container = styled.div`

        background-color : #FFF;
        padding:20px;
        box-shadow: 0px 0px 5px #CCC;
        border-radius:10px;
        font-family: Arial, Helvetica, sans-serif;
`;

export const Inputdata = styled.input`
width: 40px;
border-radius: 5px;
padding: 5px;
border-style: solid;
margin:  0 10px;
@media (max-width: 500px) {
        width: 30px;
     }
`;

export const Mudiv = styled.div`
@media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 10px 0px;
     }
`;

export const InputTexto = styled.input`
width: 100px;
padding: 5px;
border-radius: 5px;
border-style: solid;
margin:  10px 10px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const Adicionar = styled.button`
     background-color: darkblue;
     color: white;
     padding: 0.7rem;
     border-radius: 5px;
     border-style: none;
`;