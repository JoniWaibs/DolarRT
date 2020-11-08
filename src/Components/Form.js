import React, { useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'



const Formulario = styled.form`
    width:100%;
    @media(min-width: 900px){
        width:60%;
        margin: 0 auto;
    };
`;
const Select = styled.select`
    width:100%;
    height:40px;
    margin:0 auto;
`;
const Button = styled.button`
    background-color: #0d2235;
    margin: 20px 0px;
    display:block;
    width:100%;
    padding:10px 0px;
    color: white;
    border-radius:5px;
    border:none;
    height:40px;
`;


function Form({consultarAPI}){
     //state inicial 
     const [ req , setReq ] = useState("")
    //state error
    const [ error , setError ] =useState(false)
    //funcion que captura el req
    function typeDolar(e){
        e.preventDefault()
        const item = e.target.value;
        setReq(item)
    }

    //enviar req
    function sendReq(e){
        e.preventDefault()
        //Valicacion
        if(req === ""){
            setError(true)
            return;
        }
        setError(false);
        //enviar al componente principl
        consultarAPI(req)
    }
   

    return(
       <Formulario onSubmit={sendReq}>
           {error ? <Error msj={"Seleccioná una opción"} /> : null} 
           <p>Tipo Dolar</p>
           <Select onChange={typeDolar}>
               <option value="">-Seleccioná-</option>
               <option value="dolarblue">Blue</option>
               <option value="dolaroficial">Oficial</option>
               <option value="contadoliqui">CCL</option>
               <option value="dolarbolsa">Dolar Bolsa</option>
           </Select>
            <Button type="submit">CONSULTAR</Button>
       </Formulario>            
    )
}
export default Form;