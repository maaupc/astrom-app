import {React, useState} from 'react';
import "../styles/Filtro.css"
import { empleadoGet } from '../helpers/licencia';
import { Table, Form, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';







const FiltroBusqueda = () => {

  const [filtro, setFiltro] = useState("")




  const BuscarDatos = (e) => {

    e.preventDefault()
    const empleado = empleadoGet(filtro.NroDocumento) 



    console.log(empleado)
  
  }

  const HandleChange = (e) => {
   

    e.preventDefault()
    setFiltro({

      ...filtro,
      [e.target.name]:e.target.value
      

    })


  }
  
     return (
 <>

<Form onSubmit={BuscarDatos}>
  <Row className="align-items-center">
    <Col xs="auto">
      <Form.Control
        className="mt-3 mb-3"
        id="inlineFormInput"
        placeholder="Empleado"
        onChange={HandleChange}
        name="empleado"
      />
    </Col>
    <Col xs="auto">
     
      <InputGroup className="mt-3 mb-3">
        
        <FormControl id="inlineFormInputGroup"
        placeholder="Nro Documento"
        onChange={HandleChange}
        name="NroDocumento" />
      </InputGroup>
     </Col>
      
    <Col xs="auto">
      <Button type="submit" 
      className="mb-2"
      >
        Buscar
      </Button>
    </Col>
  </Row>
</Form>


         

<Table striped bordered hover variant="dark" table-responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Empleado</th>
      <th>Estado</th>
      <th>Recibo de sueldo</th>
      <th>Licencia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
    </tr>
    <tr>
     
    </tr>
    <tr>
      
    </tr>
  </tbody>
</Table>

         </>


     );
};

  

export default FiltroBusqueda
