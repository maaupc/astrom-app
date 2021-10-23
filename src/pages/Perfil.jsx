
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { actualizarEmpleado, obtenerEmpleado} from "../helpers/perfil";
import { puestosGet } from "../helpers/puesto";
import "../styles/perfilUsuario.css";
import "../styles/switchStyled.css"
import logo2 from "../assets/logo2.png";
import Swal from "sweetalert2";

const Perfil = () => {
      
      const Alertsucces = () => {
            Swal.fire({
              position: "center",
              icon: "success",
              html: '<b  class="swal-title"> Se actualizaron correctamente los cambios! </>',
              showConfirmButton: false,
              timer: 1700,
            });
          };
  const [update, setUpdate] = useState(false);
  const [image, setImage] = useState('');
  const [show, setShow] = useState(true);
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
    imagen:"",
    dni:"",
    nacimiento:"",
    emergencia:""
  });
  const [salario, setSalario] = useState("x")
  const msg= "Ingrese un imagen de tamaño grande"
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
             }   
           }, [selectedFile]);


  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("auth"));
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
        nacimiento:respuesta.empleado.nacimiento,
        emergencia:respuesta.empleado.emergencia
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
    console.log("submit")
    const { telefono, email ,imagen } = perfil;
    const datos = JSON.parse(localStorage.getItem("auth"));
    if ( telefono && email && imagen) {
      actualizarEmpleado(datos.empleado.uid, perfil).then((respuesta) => {
        if(respuesta.errors){
          return window.alert(respuesta.errors[0].msg);
      }
      if(respuesta.msg){
        Alertsucces()
      }
      });
      console.log(perfil)
    //         getImagen();
    //          console.log("getImagen")
    //   });

    //   Alertsucces()
    // }
    // setUpdate(false);
    };
  }
  const handleChangeConctacto=(e)=>{
      setPerfil({
            ...perfil,
            [e.target.name]: e.target.value,
    
          });
  }
  
  const handleSubmitContacto = (e) =>{
      e.preventDefault()
        const {emergencia}=perfil
        const datos = JSON.parse(localStorage.getItem("auth"));
        if(emergencia){
            actualizarEmpleado(datos.empleado.uid,perfil).then((respuesta) => {
              if(respuesta.errors){
                return window.alert(respuesta.errors[0].msg);
            }
            if(respuesta.msg){
              Alertsucces()
            }
            });
        }
  }
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
    if(!isNaN(Number(number))){
      return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
    }else{
      return "$ XXXXXX.XX"
    }
  };
 

   const licenciaEstado=(licen)=>{
         if(licen==="true"){
               return ("Activa");
        }
         else{
               return ("No Activa") ;
         }      
   } 

   const handleSalario = ({target}) =>{
     if(target.checked){
       setSalario(puesto.salario)
    }else{
      setSalario("X")
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
                    <div className="text-center ">
                    <div className="d-flex justify-content-center align-items-end ml-4 m-2 card-form">
                        <div 
                            className="rounded-circle overflow-hidden d-flex align-items-center "
            
                        >
                            <img src={perfil.imagen}  alt="profile" className="imgPerfil"/>
                        </div>
                        <label htmlFor="file-input" style={{ cursor: 'pointer' }}  >
                            <img
                                src="https://icongr.am/jam/camera.svg?size=148&color=4daaa7"
                                alt="camera edit"
                                width="25"
                                className="camera-perfil"
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
                      <div className="form-group mb-2 ">
                        <strong>N° Telefono</strong>
                        <input 
                          maxLength="10"
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
                    <strong >Contactos de Emergencia</strong>
                    <hr />
                    <i
                      className="fa fa-volume-control-phone "
                      aria-hidden="true"
                      id="i-phone"
                    ></i>
                    <span> Por favor provee tu contacto de emergencia</span>
                     <button type="submit" className="button-perfil-emergencia"
                     onClick={() => {
                             setShow(!show);
                         }}>
                     <i
                      className="fa fa-plus-circle "
                      aria-hidden="true"
                      id="i-add"
                    > {show ? '' : ''}
                    </i>
                    </button>
                    {show ? (
                      ""
                       ) : (
                        <div className="div-perfil-emergencia">
                         <form onSubmit={handleSubmitContacto}>
                         <input 
                        maxLength="10"
                        id="input-perfil-emergencia"
                        type="number"
                        value={perfil.emergencia}
                        name="emergencia"
                        onChange={handleChangeConctacto}/>
                        <button 
                        type="submit" 
                         >✅</button>
                         </form>
                        
                         </div>
                        
                         )}
                           
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 col-md-6 ">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-12 mb-3  d-md-block">
                <div className="card_perfil">
                  <div className="card-body card-info-perfil">
                    <h3>Info Personal</h3>
                    <hr className="hr-card" />
                    <span > <i className="fa fa-user icono-perfil-cards" aria-hidden="true"></i> ID Empleado : {perfil.dni}</span>
                    <hr />
                    <span><i className="fa fa-calendar-check-o icono-perfil-cards" aria-hidden="true"></i> Fecha Nac. : {perfil.nacimiento}</span>
                    <hr />
                    <span className="span-i"><i className="fa fa-phone icono-perfil-cards" aria-hidden="true"></i> N°. Emergencia : {perfil.emergencia}</span>
                    <hr />
                    <strong className="p-ubicacion"><i className="fa fa-map-marker icono-perfil-cards" aria-hidden="true"></i> Ubicación : {perfil.domicilio} , {perfil.localidad} , {perfil.provincia} .</strong>
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
                    <span name="salarioMensual">{formatCurrency(salarioAnual(salario))}</span>  
                      <label id="botones-switch" className="switch_perfil">
                     <input  className="boton-input" 
                        type="checkbox"                      
                         name="mostrarSalario"
                         onChange={handleSalario}/>
                        <div className="slider-boton round"></div>
                        </label>
                    </div>
                   
                    <strong>Mensual</strong>
                    <br />
                    <div className="alert alert-secondary" role="alert">
                      <span name="salarioAnual">{formatCurrency(salario)}</span>
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
                    <strong> <i className="fa fa-briefcase icono-perfil-cards" aria-hidden="true"> </i> Puesto: </strong><span>{puesto.nombre}</span>
                    <hr />
                    <strong><i className="fa fa-id-card-o icono-perfil-cards" aria-hidden="true"></i> Licencia:</strong><span> {licenciaEstado(perfil.licencia)}</span>
                    <hr />
                    <strong> <i className="fa fa-clock-o icono-perfil-cards" aria-hidden="true"></i> Horarios:</strong><span> {puesto.horarios}</span>
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
                      Trabajamos con el objetivo de ayudar a nuestros empleados y clientes en un mejor ambiente. Nuestro marco estratégico integra la Responsabilidad Social Corporativa y se fundamenta en cuatro pilares: clientes, empleados, proveedores y el entorno social.<Link className="nav-link" to="/error404"><i className="fa fa-arrow-circle-right" aria-hidden="true" id="i-verMas">Ver más</i></Link> 
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