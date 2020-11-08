import React from 'react'
import styled from '@emotion/styled'

const Alerta = styled.div`
    background-color:#ed6b61;
    color:white;
    padding:1px;
    border-radius:5px;
    text-align:center;
`;

function Error({msj}){
    return(
        <Alerta>
            <p>{msj}</p>
        </Alerta>
        
    )
}

export default Error;