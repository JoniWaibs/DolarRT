import React, { useState, Fragment } from 'react'
import styled from '@emotion/styled'
import Form from './Components/Form'
import Resultado from './Components/Resultado'
import axios from 'axios'
import Spinner from './Components/Spinner'

const Container = styled.div`
  background-color:white;
  border-radius:10px;
  width:90%;
  margin:50px auto;
  padding:10px;
`;
const Heading = styled.div`
  color:#0d2235;
  font-size: 30px;
  text-align:center;
`;

function App() {
  //state al spinner 
  const [ spin , setSpin  ] = useState(false)
  //state que mustra u oculta el resultado
  const [ show , setShow ] = useState(false)
  //state que almacena y modifica los resultados
  const [ result , setResult ] = useState({
    fecha:"",
    compra:"",
    venta:"",
  })
   
    //consultar con la api
    async function consultarAPI(req){
      //endopoint
      const apiURL = `https://api-dolar-argentina.herokuapp.com/api/${req}`;
      //configurar proxy para no tener errores de cors
      const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(apiURL)}`

      try{
        const resultado = await axios.get(url)
        .then(res => JSON.parse( res.data.contents ))
        setShow(false)
        setSpin(true)
        setResult(resultado)
      }catch(err){
        console.log(err)
        setShow(false)
        setSpin(false)
      }
      //despues de 3 seg sale el spiner entra el result
      setTimeout(()=>{
        setSpin(false)
        setShow(true)
      },3000) 
        
    } 



  return (
    <Fragment>

      
       <Container>
          <Heading>
            <h1>Cotiza Dolar AR</h1>
          </Heading>
          <Form consultarAPI={consultarAPI}/>
      </Container>


      { spin ? <Spinner/> : null }
      
      { show ? <Resultado result={result} /> : null }

    </Fragment>
   
  );
}

export default App;
