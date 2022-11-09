import {useState} from 'react'

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
      <span>Este producto tiene {rate} puntos</span> - <button onClick={rateProducto}>Puntuá este producto</button> <button onClick={disrateProducto}>Despuntuá este producto</button>
      <p className='list-info p'>{props.description}</p>
      </div>
    </div>
  )
}

export default ItemListContainer