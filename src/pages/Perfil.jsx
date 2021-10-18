
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { actualizarEmpleado, obtenerEmpleado} from "../helpers/perfil";
import { puestosGet } from "../helpers/puesto";
import "../styles/perfilUsuario.css";
import "../styles/switchStyled.css"
import logo2 from "../assets/logo2.png";


const Perfil = () => {
  const [update, setUpdate] = useState(false);
  const [image, setImage] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [perfil, setPerfil] = useState({
    nombre: "",
    apellido:"",
    telefono: "",
    email: "",
    provincia:"",
    localidad:"",
    domicilio:"",
    licencia:"",
    imagen:null,
    dni:"",
    nacimiento:""
  });
function getBase64(imagen) {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener('load', () => resolve(reader.result));
          reader.readAsDataURL(imagen);
      })
      };
useEffect(() => {
            if (image) {
              setPerfil( {
                  ...perfil, 
                imagen:image,
              });
            }   
          }, [image]);
useEffect ( async () =>{
             if (selectedFile){  
                   const file= await getBase64(selectedFile);
                   setImage(file);
                   console.log(file)
             }   
           }, [selectedFile]);


  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("auth"));
      console.log(datos)
    obtenerEmpleado(datos.empleado.uid).then((respuesta) => {
      setPerfil({
        nombre: respuesta.empleado.nombre,
        apellido:respuesta.empleado.apellido,
        telefono: respuesta.empleado.telefono,
        email: respuesta.empleado.email,
        provincia: respuesta.empleado.provincia,
        localidad: respuesta.empleado.localidad,
        domicilio: respuesta.empleado.domicilio,
        licencia:respuesta.empleado.licencia,
        imagen:respuesta.empleado.img,
        dni:respuesta.empleado.dni,
        nacimiento:respuesta.empleado.nacimiento
      });
      cargarPuesto(respuesta.empleado.puesto);
     
    });
  }, []);
  const handleChange = (e) => {
      if (update) {
        setPerfil({
          ...perfil,
          [e.target.name]: e.target.value,
  
        });
      }
    };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono, email ,provincia,localidad ,domicilio,imagen } = perfil;
    const datos = JSON.parse(localStorage.getItem("auth"));
    if (nombre && telefono && email && provincia && localidad && domicilio && imagen) {
      actualizarEmpleado(datos.empleado.uid, perfil).then((respuesta) => {
      });
    }
    console.log(perfil)
    setUpdate(false);
  };
  const [puesto,setPuesto] = useState({
        nombre:"",
        horarios:"",
        salario:0
  })
  const salarioAnual=(salarioMensual)=>{
      return (salarioMensual*12)
}

  const cargarPuesto=(puestoId)=> {
      puestosGet().then((respuesta)=>{
            if(!respuesta.puestos){
                  return ;
            }
            const puestoEncontrado=respuesta.puestos.find((elem)=>{
                  return elem._id===puestoId;
            })
            if(!puestoEncontrado){
                  return;
            }
            setPuesto({
                  nombre:puestoEncontrado.nombre,
                  horarios:puestoEncontrado.horarios,
                  salario:puestoEncontrado.salario
            });
       });
      
  }


  const formatCurrency = function(number){
      return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
  };
 

   const licenciaEstado=(licen)=>{
         if(licen==="true"){
               return ("Activa");
        }
         else{
               return ("No Activa") ;
         }      
   } 
  return (
    <>
      <div className="container-perfil-header">
          <div className="perfil-header">
                <h1 className="h1-perfil-header"> Mi Perfil</h1>
             </div>
       </div>
       <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4 col-sm-12-p-relative col-md-6 row-principal id=col-primera">
            <div className="row">
              <div className="col ">
                <div className="card_perfil w-100 card-P">
                  <div className="card-title">
                    <i
                      className="fa fa-pencil i-pencil"
                      aria-hidden="true"
                      onClick={() => setUpdate(true)}
                    ></i>
                  </div>
                  <div className="card-body card-img_perfil">
                    <form onSubmit={handleSubmit}>
                    <div className="text-center">
                    <div className="d-flex justify-content-center align-items-end ml-4 m-2 card-form">
                        <div
                            className="rounded-circle overflow-hidden d-flex align-items-center "
            
                        >
                            <img src={perfil.imagen  } alt="profile" className="imgPerfil"/>
                        </div>
                        <label htmlFor="file-input" style={{ cursor: 'pointer' }}  >
                            <img
                                src="https://icongr.am/jam/camera.svg?size=148&color=4daaa7"
                                alt="camera edit"
                                width="25"
                                />
                        </label>
                        <input
                            id="file-input"
                            className="d-none"
                            accept="image/png, .png .jpeg, .jpg, image/gif"
                            type="file"
                          onChange={ (e) => setSelectedFile (e.target.files[0])}
                            name="imagen"
                        />
                       
                    </div>
                </div>
               
                    <h2 className="title_perfil_card">{perfil.nombre} {perfil.apellido}</h2>
                      <div className="form-group mb-2">
                        <strong>N° Telefono</strong>
                        <input
                          type="string"
                          className="form-control"
                          name="telefono"
                          disabled={update ? false : true}
                          value={perfil.telefono}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-2">
                        <strong>Correo</strong>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={perfil.email}
                          disabled={update ? false : true}
                          onChange={handleChange}
                        />
                      </div>
                     
                          <div>
                        <button type="submit" className="btn btn-save btn-lg btn-block">
                          Actualizar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col mb-3">
                <div className="card_perfil w-100">
                  <div className="card-body card-call">
                    <strong>Contactos de Emergencia</strong>
                    <hr />
                    <i
                      className="fa fa-volume-control-phone "
                      aria-hidden="true"
                      id="i-phone"
                    ></i>
                    <span> Por favor provee tu contacto de emergencia</span>
                     <Link  className="nav-link" to="/Error404">
                     <i
                      className="fa fa-plus-circle "
                      aria-hidden="true"
                      id="i-add"
                    >Agregar contacto  
                    </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 col-md-6 ">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-12 mb-3 d-none d-md-block">
                <div className="card_perfil">
                  <div className="card-body card-info-perfil">
                    <h3>Info Personal</h3>
                    <hr className="hr-card" />
                    <span className="span-i"> ID Empleado : {perfil.dni}</span>
                    <hr />
                    <span className="span-i"> Fecha Nac. : {perfil.nacimiento}</span>
                    <hr />
                    <p className="p-ubicacion">Ubicacion : {perfil.domicilio} , {perfil.localidad} , {perfil.provincia} .</p>

                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-12">
                <div className="card_perfil">
                  <div className="card-body card-info-perfil">
                    <h3>Info Salarial</h3>
                    <hr  className="hr-card"/>
                    <strong>Anual</strong>
                    <br/>
                    <div className="alert alert-secondary" role="alert"> 
                    <span> </span>
                    <span >{formatCurrency(salarioAnual(puesto.salario))}</span>  
                      <label id="botones-switch" className="switch_perfil">
                     <input  className="boton-input" 
                        // onChange={handleChangeSwitc}
                        // checkend={isCheckend}
                         type="checkbox"
                         name="check1"
                         value="check1"/>
                        <div class="slider-boton round"></div>
                        </label>
                    </div>
                   
                    <strong>Mensual</strong>
                    <br />
                    <div className="alert alert-secondary" role="alert">
                      {formatCurrency(puesto.salario)}
                      {/* <label id="botones-switch" className="switch_perfil">
                         <input className="boton-input"   onChange={ (e) => handleChangeSwitch ("check2", e.target.value)}
                        checkend={isCheckend}
                         type="checkbox"
                         name= "check2"
                         value="check2"/>
                        <div className="slider-boton round"></div>
                        </label>
                       */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 row-ultimas">
              <div className="col-sm-12 col-lg-6 mb-3 ">
                <div className="card_perfil">
                  <div className="card-body card-info-perfil">
                    <h3>Info Laboral </h3>
                    <hr/>
                    <strong>Puesto: </strong><span>{puesto.nombre}</span>
                    <hr />
                    <strong>Licencia:</strong><span> {licenciaEstado(perfil.licencia)}</span>
                    <hr />
                    <strong>Horarios:</strong><span> {puesto.horarios}</span>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-12">
                <div className="card_perfil">
                  <div className="card-body card-info-perfil">
                    <h3>Info de Astrom </h3>
                    <hr />
                    <p className="p-parrafo-perfil">
                      <img
                        src={logo2}
                        alt="logo-astrom"
                        className="img-logo-perfil"
                      /> 
                      Trabajamos con el objetivo de ayudar a nuestros empleados y clientes en una mejor hambiente.
                      Nuestro marco estratégico integra la Responsabilidad Social Corporativa y se fundamenta en cuatro pilares: clientes, empleados, proveedores y entorno social. <Link className="nav-link" to="/Error404"><i className="fa fa-arrow-circle-right" aria-hidden="true" id="i-verMas">Ver mas</i></Link> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;