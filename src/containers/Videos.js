import { useState ,useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer'
import {data} from '../utils/data'
import { customFetch } from '../utils/customFetch'

const Videos = () => {
  const [datos, setDatos] = useState ([])

  const deleteProducto = (id) => {
    let nuevosDatos = datos.filter(item => item.id != id)
    setDatos(nuevosDatos)
  }

useEffect (() => {
  customFetch(2000, data)
    .then(response => setDatos(response))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
    {
      datos.map(item => (
        <ItemListContainer
        key={item.id}
        title={item.title}
        precio={item.precio}
        description={item.description}
        thumbnails={item.thumbnails}
        deleteProducto={() => deleteProducto(item.id)}
        />
      ))
    }
    
  </>
  )
}

export default Videos