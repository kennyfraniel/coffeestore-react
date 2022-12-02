import {useState} from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'wouter';

const ItemListContainer = (props) => {
  const [rate, setRate] = useState(0);
 
  const rateProducto = () => {
    //puntuar++ PROHIBIDO
    setRate (rate + 1)
    console.log(rate)
  }
  const disrateProducto = () => {
    setRate (rate - 1)
  }
  return (
    <div className='list-container'>
      <div className='list-image'>
      <img src={props.thumbnails} alt='cafiza'></img>
      </div>
      <div className='list-info'>
      <h3 className='list-info h3'>{props.title}</h3>
      <h4 className='list-info h4'>{props.precio}</h4>
      <Link to='/ItemDetail'><button>Mas detalles!</button></Link>
      <hr></hr>
      <span>Agregar al carrito {rate} </span> - <button onClick={rateProducto}>+</button> <button onClick={disrateProducto}>-</button> <Link to='/Cart'><button>Agregar al carrito</button></Link> 
      <p className='list-info h4'>{props.description}</p>
      <button onClick ={props.deleteProducto}>Borrar este producto</button>
      </div>
    </div>
  )
}

export default ItemListContainer