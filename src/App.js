import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';

function App() {
  return (
   <>
   <h1>Hola Mundo</h1>
   <button className="btn btn-primary">Boton Bootstrap</button>
   <FontAwesomeIcon icon={faBell} />
   </>
  );
}

export default App;
