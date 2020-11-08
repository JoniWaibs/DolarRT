import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    text-align:center;
    font-size: 25px;
    background-color:white;
    border-radius:10px;
    width:90%;
    margin:5px auto;
    padding:10px;
`;
const Strong = styled.span`
    font-weight:bold;
`;

function Resultado({result}){
    return (
        <Container >
            <p> <Strong>Precio de compra: </Strong> ${result.compra}</p>
            <p><Strong>Precio de venta: </Strong> ${result.venta}</p>
        </Container >
    )
}

export default Resultado;