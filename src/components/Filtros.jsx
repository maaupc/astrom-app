import {React, useState, useEffect} from 'react';
import "../styles/Filtro.css"
import { empleadoGet } from '../helpers/licencia';
import { Table, Form, Button, Row, Col, InputGroup, FormControl, Container } from 'react-bootstrap';







const FiltroBusqueda = () => {


   
   
   const [filtro, setFiltro] = useState({
     datos:[],
     loading: true
   })


   useEffect(()=>{
    empleadoGet().then((respuesta)=>{
        setFiltro({
            datos: respuesta.empleados,
            loading:false
        })
    })
}, [])


   const BuscarDatos = (e) => {
    e.preventDefault();
    empleadoGet().then((respuesta) => {
      console.log(respuesta);
    });

  };





  const HandleChange = (e) => {
   

    e.preventDefault()
    setFiltro({

      ...filtro,
      [e.target.name]:e.target.value
      

    })


  }

  
  
     return (
 <>


<Form onSubmit={BuscarDatos} >
  <Row className="align-items-center ">
    <Col xs="auto">
      <Form.Control
      
        className="mt-3 mb-3"
        id="inlineFormInput"
        placeholder="Empleado"
        maxLength="25"
        onChange={HandleChange}
        name="empleado"
      />
    </Col>
    <Col xs="auto">
     
      <InputGroup className="mt-3 mb-3">
        
        <FormControl id="inlineFormInputGroup"
        placeholder="Documento"
        onChange={HandleChange}
        maxLength="8"
        name="NroDocumento" />
      </InputGroup>
     </Col>
      
    <Col xs="auto">
      <Button type="submit" 
      className="mt-3 mb-3">
        Buscar
      </Button>
    </Col>
  </Row>
</Form>


         

<Table striped bordered hover variant="dark" table-responsive>
  <thead>

    <tr>
      <th>Documento</th>
      <th>Empleado</th>
      <th>Puesto</th>
      <th>Licencia</th>
      
    </tr>
  </thead>
  <tbody>
  {filtro.datos.map((empleado)=>(
                        
                        <tr key={empleado.uid}>
                            <th>{empleado.dni}</th>
                            <td>{empleado.apellido}, {empleado.nombre}</td>
                            <td>{empleado.puesto}</td>
                            <td>{empleado.licencia? "VIGENTE" : "NO VIGENTE"}</td>
                            
                        </tr>
                    ))}
    
  
  </tbody>
  
</Table>

         </>


     );
};

  

export default FiltroBusqueda
