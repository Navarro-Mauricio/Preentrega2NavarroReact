import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, stock, precio, img}) => {
  const [agregarCantidad, setAgregarCantidad]  = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }

  return (
    <div className='contenedorItem1'>
    <div className='contenedorItem'>  <img  src={img} alt={nombre} /></div>
    <div className='contenedorItem'>
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>
          Calcos en <strong>Vinilo</strong> <br />
Disponibles en 3 tamaños <br />
A prueba de: <strong>Agua, Sol y Roces</strong></p>
       
        {
          agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
    </div>
    </div>
  )
}

export default ItemDetail